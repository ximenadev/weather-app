import { ChangeEvent, useState } from "react"
import { Flex } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { useGetWeatherDataQuery } from "../../reducers/WeatherSlice"
import PageContainer from "../../components/Common/PageContainer"
import Search from "../../components/Common/Search"
import Loading from "../../components/Common/Loading"
import Header from "../../components/Common/Header"
import Today from "../../components/Home/Today"
import EmptyState from "../../components/Common/EmptyState"
import Error from "../../components/Common/Error"
import Stats from "../../components/Home/Stats"

const Home = () => {
  const [value, setValue] = useState("")
  const [debouncedValue] = useDebouncedValue(value, 600)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  };

  const { data, isError, isSuccess } = useGetWeatherDataQuery(debouncedValue, {
    refetchOnMountOrArgChange: true,
    skip: !debouncedValue,
  });

  return (
    <PageContainer>
      <Search handleChange={handleChange} value={value} />

      {
        !debouncedValue ? <EmptyState isForecast={false} />
        : isError ? <Error />
        : isSuccess && data ? (
          <Flex wrap="wrap" mt="xl" align="center">
            <Header city={data.name} />
            <Today weather={data.weather[0]} temp={data.main.temp} />
            <Stats stats={data.main} />
          </Flex>
        ) : <Loading />
      }
    </PageContainer>
  );
};

export default Home
