import { Text, Box, Image } from '@chakra-ui/react'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import { useSelector } from 'react-redux'
import { selectConfigState } from '../store/configSlice'
import PraiseCard from '../components/PraiseCard'
import SurveyCard from '../components/SurveyCard'

export default function Home() {
    const configState = useSelector(selectConfigState)
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={20}
                marginTop={10}
            >
                <Box>{configState ? <PraiseCard /> : <SurveyCard />}</Box>
                <Box>
                    <Text fontSize="4xl">Dashboard placeholder</Text>
                </Box>
            </Box>
        </Box>
    )
}
