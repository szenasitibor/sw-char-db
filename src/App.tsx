import React, {useEffect, useState} from 'react';
import {useFetch} from "./hooks/useFetch";
import {Box} from "@mui/material";
import {CharacterList} from "./components/CharacterList/CharacterList";
import {Character, CharacterWrapper} from "./types/CharacterTypes";
import {Header} from "./components/Header/Header";
import {CharacterSearch} from "./components/CharacterSearch/CharacterSearch";
import {LoadMoreBar} from "./components/LoadMoreBar/LoadMoreBar";
import {LoadingIndicator} from "./components/LoadingIndicator/LoadingIndicator";
import {ItemCountDisplay} from "./components/ItemCountDisplay/ItemCountDisplay";
import {CharacterSort, SORTING_DEFAULT_VALUE} from "./components/CharacterSort/CharacterSort";
import {applySort} from "./components/CharacterSort/CharacterSortUtils";

export const App = () => {
  const {loading, data, response, reFetch, newFetch} = useFetch<CharacterWrapper, Character[]>(process.env.REACT_APP_BASE_URL!);
  const [sortedData, setSortedData] = useState<Character[]>([]);
  const [sorting, setSorting] = useState<string>(SORTING_DEFAULT_VALUE);
  const [sorted, setSorted] = useState<boolean>(false);

  useEffect(() => {
    if (sorting !== SORTING_DEFAULT_VALUE) {
      setSortedData(structuredClone(applySort(data!, sorting)));
      setSorted(true);
    } else {
      setSortedData([]);
      setSorted(false);
    }
  }, [data, sorting, setSortedData, setSorted]);

  const search = (s: string) => {
    setSorting("");
    setSortedData([]);
    setSorted(false);
    newFetch(`${process.env.REACT_APP_BASE_URL}?search=${s}`);
  }

  const sortingChanged = (sort: string) => {
    setSorted(sort !== SORTING_DEFAULT_VALUE);
    setSorting(sort);
  };

  const deleteSearch = () => {
    setSorting(SORTING_DEFAULT_VALUE);
    setSortedData([]);
    reFetch();
  }

  const loadMore = () => {
    if (!response?.next) {
      return;
    }
    newFetch(response?.next, true);
  };

  return (
    <Box className="App">
      <Header />
      <CharacterSearch
        search={search}
        deleteSearch={deleteSearch}
        disabled={loading}
      />
      <ItemCountDisplay
        allItemCount={response?.count}
        shownItemCount={sortedData.length > 0 ? sortedData.length : data?.length}
        disabled={loading}
      />
      <CharacterSort
        selected={sorting}
        onChange={sortingChanged}
        disabled={loading}
      />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <CharacterList characters={sorted ? sortedData : data} />
          <LoadMoreBar onClick={loadMore} disabled={data?.length === response?.count}/>
        </>
      )}
    </Box>
  );
}
