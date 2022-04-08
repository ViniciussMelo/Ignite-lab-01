import { PrismaPromise } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import slugify from 'slugify';

import { PrismaService } from './../database/prisma/prisma.service';
import { Product } from '../http/graphql/models/product';

interface CreateProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  async createProduct({ title }: CreateProductParams) {
    const slug = slugify(title, { lower: true });

    const productWithSameSlug = await this.getProductBySlug(slug);

    if (productWithSameSlug) {
      throw new Error('Another product with same slug already exists!');
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }

  private getProductBySlug(slug: string): PrismaPromise<Product> {
    const product = this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    return product;
  }

  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
