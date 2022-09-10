import { StoryLayout } from '../../../shared/StoryLayout';
import { Box, Text } from '@chakra-ui/react';
import fontStyles from '../../foundations/fontStyles';
import textStyles from '../../foundations/textStyles';

export function DisplayTypography() {
    const sans = Object.keys(textStyles).filter((key) => key.includes('-sans'));
    const mono = Object.keys(textStyles).filter((key) => key.includes('-mono'));
    const sans2 = fontStyles.sans;
    console.log("FONT STYLES: ", fontStyles.sans);
    console.log('TEXT STYLE SANS: ', sans);
    return (
        <StoryLayout title='Typography'>
            <Box>
                <Text textStyle='text-2xl-sans' textDecoration='underline'>
                    SANS
                </Text>
                {(sans2).map((key) => {
                    return (
                        <Box
                            key={key}
                            marginY='8'
                            paddingY='8'
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Text
                                fontSize='lg'
                                marginBottom='4'
                                textStyle='text-sm-mono'
                            >
                                {key}
                            </Text>
                            <Text textStyle={key}>
                                Lorem aliqua deserunt officia ut.
                            </Text>
                        </Box>
                    );
                })}
                <Text textStyle='text-2xl-sans' textDecoration='underline'>
                    MONO
                </Text>
                {mono.map((key) => (
                    <Box
                        key={key}
                        marginY='8'
                        paddingY='8'
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Text
                            fontSize='lg'
                            marginBottom='4'
                            textStyle='text-sm-mono'
                        >
                            {key}
                        </Text>
                        <Text textStyle={key}>
                            Lorem aliqua deserunt officia ut.
                        </Text>
                    </Box>
                ))}
            </Box>
        </StoryLayout>
    );
}
