import { ChangeEvent, useState } from "react"
import { Flex } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import PageContainer from "../../components/Common/PageContainer"
import Search from "../../components/Common/Search"
import Loading from "../../components/Common/Loading"
import Header from "../../components/Common/Header"
import EmptyState from "../../components/Common/EmptyState"
import Error from "../../components/Common/Error"
import { useGetForecastDataQuery } from "../../reducers/ForecastSlice"
import DayCard from "../../components/Forecast/DayCard"

//JSON dummy if your API Key hasn't been activated and you want to check component view
// const mockupList = [
//   {
//     dt: 1712383200,
//     temp: {
//       min: 20,
//       max: 100
//     },
//   },
//   {
//     dt: 1712469600,
//     temp: {
//       min: 80.74,
//       max: 100
//     },
//   },
//   {
//     dt: 1712556000,
//     temp: {
//       min: 100,
//       max: 105
//     },
//   },
//   {
//     dt: 1712642400,
//     temp: {
//       min: 90,
//       max: 95
//     },
//   },
//   {
//     dt: 1712728800,
//     temp: {
//       min: 89.74,
//       max: 100
//     },
//   },
//   {
//     dt: 1712815200,
//     temp: {
//       min: 30,
//       max: 43
//     },
//   },
//   {
//     dt: 1712901600,
//     temp: {
//       min: 85.74,
//       max: 100
//     },
//   },
//   {
//     dt: 1712988000,
//     temp: {
//       min: 89.74,
//       max: 100
//     },
//   },
//   {
//     dt: 1713074400,
//     temp: {
//       min: 89.74,
//       max: 100
//     },
//   },
// ]

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
        !debouncedValue ? <EmptyState />
        : isError ? <Error />
        : isSuccess && data ? (
          <Flex wrap="wrap" mt="xl" align="center">
            <Header city={data?.name || "New York"} />
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
