import { Box, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles"
import LogoAvataGif from '../../admin/homepage/gif'

const StyleBox = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  flexDirection: "column",
  background: "rgb(250,255,186)",
  background: "linear-gradient(0deg, rgba(250,255,186,0.9023984593837535) 0%, rgba(69,255,194,0.9023984593837535) 60%, rgba(145,242,255,0.9023984593837535) 100%)",
  position: "relative",
  overflow: "hidden"
}))

const StyleEffect = styled((props) => <Box {...props} />)(({theme}) => ({
  top: 0,
  left: 0,
  borderRadius: "35%",
  width: "1000px",
  height: "1025px",
  position: "absolute",
  marginLeft: "-900px",
  marginTop: "-300px",
  background: "white",
  animation: "wave 5s infinite linear",
  "@keyframes wave": {
    from: {
      transform: "rotate(0deg)"
    },
    from: {
      transform: "rotate(360deg)"
    }
  },
  [theme.breakpoints.down('sm')]: {
  background: "black",

},
}))


export default function Homepage() {
  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection='row'
        justifyContent={'center'}
        textAlign={'center'}
        
      >

        <LogoAvataGif />

        <StyleBox>

          <StyleEffect />

         
          <Box flexGrow={1} />

          <Box flexGrow={1} textAlign={'center'}>
            <Box sx={{ fontWeight: 2 }} >
              Hello !! I'm Thiên Lảnh
            </Box>
            <Box sx={{ fontWeight: 'bold', fontSize: 30}}>
              Front-End Dev | UX-UI
            </Box>
          </Box>
        </StyleBox>

      </Box>

      {/* <Box sx={{ fontWeight: 300, textAlign: "justify" }}>
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
        Voice assistants are a convenient way to interact with smartphones in natural language. It uses technologies like speech recognition, natural language processing (NLP), and AI to understand and respond to human commands. Voice assistants can do many different tasks such as making calls, sending messages, playing music, checking the weather, setting reminders, etc. However, it still faces some challenges such as problems with accuracy (especially with voice or background noise), limited functionality (compared to touch-based interactions), and privacy concerns (due to data collection).
      </Box> */}

    </Box>

  )
}