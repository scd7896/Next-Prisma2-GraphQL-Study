import { ApolloError, DocumentNode, MutationFunctionOptions, MutationHookOptions, useMutation } from "@apollo/client";
import { useCallback } from "react";

function useMutationErrorWrapper<T, K>(
	query: DocumentNode,
	options?: MutationHookOptions<T, K>
): {
	data: T | null | undefined;
	loading: boolean;
	error?: ApolloError;
	mutation: (options?: MutationFunctionOptions<T, K> | undefined) => void;
} {
	const [mutation, { data, loading, error }] = useMutation<T, K>(query, options);

	const mutationHandle: (options?: MutationFunctionOptions<T, K> | undefined) => void = useCallback(
		async (options?: MutationFunctionOptions<T, K> | undefined) => {
			try {
				const res = await mutation(options);
				return res;
			} catch (err) {
				console.dir(err);
			}
		},
		[]
	);

	return {
		data,
		loading,
		error,
		mutation: mutationHandle,
	};
}

export default useMutationErrorWrapper;
