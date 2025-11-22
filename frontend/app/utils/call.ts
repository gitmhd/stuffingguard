/* eslint-disable @typescript-eslint/no-explicit-any */

// Generic API response type
interface ApiResponse<TData> {
  error?: string;

  status?: number;
  breaches?: [][];
  email?: string;

  msg?: string;
  token?: string;
  user?: TData;
}

// Generic API call function
async function call<TResponseData>({
  url,
  method = "GET",
  body,
  headers = {},
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: string | FormData;
  headers?: Record<string, string>;
}): Promise<ApiResponse<TResponseData>> {
  const res = await fetch(`${url}`, {
    method: method,
    headers,
    body,
  });
  if (!res.ok) {
    const errorData = await res.json();
    return errorData;
  }
  const data = await res.json();

  return data;
}

export default call;
