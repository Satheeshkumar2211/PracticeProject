import { createTheme } from '@mantine/core';

export const PlaceholderConfig = {
  date: "DD/MM/YYYY",
  dateTime: "DD/MM/YYYY HH:MM",
  monthYear: "MM/YYYY",

  phone: "XXXXXXXXXX",
  phoneWithCode: "+91 XXXXXXXXXX",
  number: "Enter number",

  email: "example@email.com",
  password: "••••••••",

  time: "HH:MM",
  year: "YYYY",

  name: "Enter full name",
  title: "Enter title",
  description: "Enter description...",
  remarks: "Enter remarks...",
  address: "Enter full address",

  select: "Select option",
  selectStatus: "Select status",

  search: "Type to search...",
};


export const Theme = createTheme({
  components: {
    Tooltip: {
      defaultProps: {
        withArrow: true,
        transitionProps: {
          transition: 'pop',
          duration: 250,
        },
      },
      styles: {
        tooltip: {
          backgroundColor: '#0f172a',
          color: '#e2e8f0',
          fontSize: '13px',
          padding: '2px 8px',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        },
        arrow: {
          backgroundColor: '#0f172a',
        },
      },
    },

    Modal: {
      defaultProps: {
        transitionProps: {
          transition: 'pop',
          duration: 400,
          timingFunction: 'ease',
        },
      },

      styles: () => ({
        body: {
          padding: '20px',
        },
        content: {
          borderRadius: '12px',
        },
        overlay: {
          backdropFilter: 'blur(4px)',
        },
      }),
    },

    Button: {
      defaultProps: {
        size: 'md',
      },
      styles: () => ({
        root: {
          height: '35px',
          fontSize: '14px',
          borderRadius: '10px',
        },
      }),
    },

    Popover: {
      defaultProps: {
        shadow: 'md',
        radius: 'lg',
        transitionProps: {
          transition: 'pop',
          duration: 200,
        },
        position: 'bottom-end',
      }
    },

    NumberInput: {
      defaultProps: {
        placeholder: "Enter number",
      },
    },

    PasswordInput: {
      defaultProps: {
        placeholder: PlaceholderConfig.password,
      },
      styles: () => ({
        input: {
          borderColor: '#ccd2db',
        },
      }),
    },

    DateInput: {
      defaultProps: {
        placeholder: PlaceholderConfig.date
      },
    },

    DatePickerInput: {
      defaultProps: {
        placeholder: PlaceholderConfig.date,
      },
    },

    Autocomplete: {
      defaultProps: {
        placeholder: PlaceholderConfig.search,
        comboboxProps: {
          shadow: 'md',
          radius: 'lg',
          transitionProps: {
            transition: 'pop',
            duration: 200,
            timingFunction: 'ease',
          },
        },
      },
    },

    Select: {
      defaultProps: {
        placeholder: PlaceholderConfig.select,
      },
    },

    MultiSelect: {
      defaultProps: {
        placeholder: PlaceholderConfig.select,
      },
    },

    Textarea: {
      defaultProps: {
        placeholder: PlaceholderConfig.description,
      },
    },

    TextInput: {
      // styles: (_theme: any) => ({
      //   input: {
      //     borderColor: '#ccd2db',
      //   },
      // }),
    }
  }
});