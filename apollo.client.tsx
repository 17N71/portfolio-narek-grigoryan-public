import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { ReactNode } from "react"

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_PROJECT_DATASET}/${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_ADMIN_DEVELOPER}`,
	},
})
const ApolloConnecter = ({ children }: { children: ReactNode }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloConnecter
