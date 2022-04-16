import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { gql, useQuery } from "@apollo/client";

import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";
import { useGetProductsQuery, useMeQuery } from "../../graphql/generated/graphql";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const user = useUser()
  const { data: me } = useMeQuery()

  return (
    <div>
      <h1>Hello World</h1>
      <pre>Me: {JSON.stringify(me, null, 2)}</pre>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      {/* <a href="/api/auth/logout">Logout</a> */}
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // Get access token
    // console.log(getAccessToken(ctx.req, ctx.res))
    // return getServerPageGetProducts({}, ctx)
    return {
      props: {}
    }
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);