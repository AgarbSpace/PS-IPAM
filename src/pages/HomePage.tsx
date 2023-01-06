import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import { selected } from "../features/states/statesSlice";
import { useFetchStatesQuery } from "../features/StatesApi/statesApiSlice";

export default function HomePage() {
  const [stateSelected, setStateSelected] = useState<string|null>(null);
  const dispatch = useAppDispatch();
  const States = useFetchStatesQuery();


  function handleChange(e: any) {
    dispatch(selected(e.target.value))
    setStateSelected(store.getState().states.value);
  }
  return <>
    {States.data === undefined ? <div>Carregando</div> :
      <select name='select' onChange={handleChange} >
        <option value="" disabled selected hidden >Selecione um Estado</option>
        {States.data.map((option, index) => <option key={index} value={option.sigla}>{option.nome}</option>)}
      </select>
    }
    {stateSelected === null ? <></> : <div>{ stateSelected }</div>}
  </>
}
