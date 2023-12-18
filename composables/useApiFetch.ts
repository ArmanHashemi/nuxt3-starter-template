export const useApiFetch = async <T> (url: string, options = {}) => {
  const config = useRuntimeConfig()
  return useFetch<T>(`${config.public.BASE_URL}/${url}`, options)
}
