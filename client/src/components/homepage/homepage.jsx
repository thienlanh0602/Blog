import { Box } from "@mui/material";
import { styled } from "@mui/material/styles"


const StyleScroll = styled('div')(({ theme }) => ({
  page: {
    padding: theme.spacing.unit * 3,
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
    height: `calc(100% - 56px)`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: `calc(100% - 48px)`
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100% - 64px)`
    },

  }
}));

export default function Homepage() {
  const classes = StyleScroll;
  return (
    <Box className={classes.page}>
      <Box sx={{ backgroundColor: "#D8D8D8", paddingTop: 10, paddingBottom: 10  }}>
        Trương Thiên Lảnh
      </Box>
      {/* <Box>
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