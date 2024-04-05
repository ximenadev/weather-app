import { ChangeEvent, useState } from "react"
import { Flex, Text } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import PageContainer from "../../components/Common/PageContainer"
import Search from "../../components/Common/Search"
import Loading from "../../components/Common/Loading"
import Header from "../../components/Common/Header"
import EmptyState from "../../components/Common/EmptyState"
import Error from "../../components/Common/Error"
import { useGetForecastDataQuery } from "../../reducers/ForecastSlice"
import DayCard from "../../components/Forecast/DayCard"

const Forecast = () => {
  const [value, setValue] = useState("")
  const [debouncedValue] = useDebouncedValue(value, 600)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  };

  const { data, isError, isSuccess } = useGetForecastDataQuery(debouncedValue, {
    refetchOnMountOrArgChange: true,
    skip: !debouncedValue,
  });

  return (
    <PageContainer>
      <Search handleChange={handleChange} value={value} />
      {
        !debouncedValue ? <EmptyState isForecast={true} />
        : isError ? <Error />
        : isSuccess && data ? (
          <Flex wrap="wrap" mt="xl" align="center">
            <Header city={data.city.name} />
            <Text>Weather for the next 9 days</Text>
            <Flex wrap="wrap" mt="xl" align="center" gap="1rem">
              {data.list.map((item, index) => (
                <DayCard item={item} key={`Card-Forecast-${index}`} />
              ))}
            </Flex>
          </Flex>
         ) : <Loading />
      }
    </PageContainer>
  );
};

export default Forecast
