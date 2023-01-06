import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../../app/store';

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

export const apiSlice:any = createApi({
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
                const state:string|null = store.getState().states.value
                return `/estados/${state}/municipios`;
            }
        }),
        fetchDistrictInfos: builder.query<States[], number | void>({ 
            query() {
                const district:string|null = store.getState().districts.value
                return `/municipios/${district}/distritos`;
            }
        }),
        }
    }
});

export const { useFetchStatesQuery, useFetchDistrictQuery, useFetchDistrictInfosQuery } = apiSlice;
