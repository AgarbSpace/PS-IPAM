import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface States {
    id: number;
    sigla: string;
    nome: string;
    regiao: {
        id: number;
        sigla: string;
        nome: string;
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://servicodados.ibge.gov.br/api/v1/localidades',
        prepareHeaders(headers) {
            headers.set('x-api-key', 'none');
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchStates: builder.query<States[], number | void>({ 
                query() {
                    return `/estados`;
                }
            }),
            fetchDistrict: builder.query<States[], number | void>({ 
                query() {
                    return `/estados/DF/municipios`;
                }
            })
        }
    }
});

export const { useFetchStatesQuery, useFetchDistrictQuery } = apiSlice;
