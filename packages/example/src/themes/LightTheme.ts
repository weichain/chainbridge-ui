import { createTheme } from "@chainsafe/common-theme";

export const lightTheme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#F5F5F5",
      fontFamily: "'Poppins', sans-serif"
    },
  },
  themeConfig: {
    constants: {
      navItemHeight: 42,
    },
    palette: {
      additional: {
        general: {
          1: "#85A5FF", // Accents //geekblue4
        },
        transferUi: {
          1: "#595959", // FAQ button // gray8
        },
        header: {
          1: "#F5F5F5", // Background
          2: "#595959", // Text color //gray8
          3: "#BFBFBF", // border // gray6
        },
        preflight: {
          1: "#1065E5", // Button bg color
          2: "#fff", // Button color
        },
        transactionModal: {
          1: "#597EF7", // border //geekblue5
          2: "#85A5FF", // indicator border //geekblue4
          3: "#2F54EB", // indicator text //geekblue6
        },
      },
    },
    
    overrides: {
      Typography: {
        root: {
          fontFamily: "'Poppins', sans-serif"
        },
        h1: {
          fontFamily: "'Poppins', sans-serif"
        },
        h2: {
          fontFamily: "'Poppins', sans-serif"
        },
        h3: {
          fontFamily: "'Poppins', sans-serif"
        },
        h4: {
          fontFamily: "'Poppins', sans-serif"
        },
        h5: {
          fontFamily: "'Poppins', sans-serif"
        },
        button: {
          fontFamily: "'Poppins', sans-serif"
        },
        body1: {
          fontFamily: "'Poppins', sans-serif"
        },
        body2: {
          fontFamily: "'Poppins', sans-serif"
        },
      },
      CheckboxInput: {
        root: {
          alignItems: "center",
        
        },  
      },
      Button: {
        variants: {
          primary: {
            root: {
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: "#1065E5",
              color: "#ffffff",
              borderRadius: '8px',
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "#00BFFF",
              color: "#fff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "#ffffff",
              color: "#262626",
              "& svg": {
                fill: "#262626",
              },
            },
          },
          outline: {
            root: {
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: "transparent",
              color: "#ffffff",
              borderRadius: '8px',
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "#ffffff",
              color: "#262626",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
          },
        },
      },
    },
  },
});
