import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import DistrictInfos from "../components/DistrictInfos";
import StateDistricts from "../components/StateDistricts";
import { selected } from "../features/states/statesSlice";
import { useFetchStatesQuery } from "../features/StatesApi/statesApiSlice";
import { Container, Select } from "./styled";

export default function HomePage() {
  const [stateSelected, setStateSelected] = useState<string|null>(null);
  const [districtSelected, setDistrictSelected] = useState<string|null>(null);
  const dispatch = useAppDispatch();
  const States = useFetchStatesQuery();

  function handleChange(e: any) {
    dispatch(selected(e.target.value))
    setStateSelected(store.getState().states.value);
  }

  return <Container>
    {States.data === undefined ? <div>Carregando</div> :
      <Select name='select' defaultValue={'DEFAULT'} onChange={handleChange} >
        <option value="DEFAULT" disabled >Selecione um Estado</option>
        {States.data.map((option: any) => <option key={option.id} value={option.sigla}>{option.nome}</option>)}
      </Select>
    }
    {stateSelected === null ? <></> : <StateDistricts setDistrictSelected={setDistrictSelected} />}
    {districtSelected === null ? <></> : <DistrictInfos />}

  </Container>
}
