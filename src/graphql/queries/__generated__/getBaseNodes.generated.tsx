/* eslint-disable */
import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetBaseNodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBaseNodesQuery = (
  { __typename?: 'Query' }
  & { getBaseNodes: Array<Types.Maybe<(
    { __typename?: 'baseNodesType' }
    & Pick<Types.BaseNodesType, '_id' | 'name' | 'public_key' | 'socket'>
  )>> }
);


export const GetBaseNodesDocument = gql`
    query GetBaseNodes {
  getBaseNodes {
    _id
    name
    public_key
    socket
  }
}
    `;

/**
 * __useGetBaseNodesQuery__
 *
 * To run a query within a React component, call `useGetBaseNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBaseNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBaseNodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBaseNodesQuery(baseOptions?: Apollo.QueryHookOptions<GetBaseNodesQuery, GetBaseNodesQueryVariables>) {
        return Apollo.useQuery<GetBaseNodesQuery, GetBaseNodesQueryVariables>(GetBaseNodesDocument, baseOptions);
      }
export function useGetBaseNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBaseNodesQuery, GetBaseNodesQueryVariables>) {
          return Apollo.useLazyQuery<GetBaseNodesQuery, GetBaseNodesQueryVariables>(GetBaseNodesDocument, baseOptions);
        }
export type GetBaseNodesQueryHookResult = ReturnType<typeof useGetBaseNodesQuery>;
export type GetBaseNodesLazyQueryHookResult = ReturnType<typeof useGetBaseNodesLazyQuery>;
export type GetBaseNodesQueryResult = Apollo.QueryResult<GetBaseNodesQuery, GetBaseNodesQueryVariables>;