import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Walli Roller Shutter", name: "Name" },
          {
            text:
              "FIBARO Walli Roller Shutter is a smart wall switch designed to control motors of roller blinds, awnings, venetian blinds and other single phase, AC powered devices via Z-Wave network. It measures active power and energy consumed by the controlled load.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/010F:1000:1D01",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://www.fibaro.com/en/products/smart-switches-and-outlets-walli-roller-shutter/",
            name: "ProductPage",
          },
          {
            text: "https://manuals.fibaro.com/walli-roller-shutter/",
            name: "ProductSupport",
          },
          { text: "images/fibaro/fgwr111.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/3396/FGWREU-111-T-EN-0.19.pdf",
            name: "ProductManual",
          },
          {
            text:
              "FIBARO Walli Roller Shutter is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "To add the device to the Z-Wave network manually:\n      1. Power the device.\n      2. Set the main controller in (Security/non-Security Mode) add mode (see the controller's manual).\n      3. Quickly, three times click one of the buttons.\n      4. If you are adding in Security S2 Authenticated, scan the DSK QR code or input the underlined part of the DSK (label on the bottom of the box).\n      5. LED will start blinking yellow, wait for the adding process to end.\n      6. Adding result will be confirmed by the Z-Wave controller's message and the LED frame:\n        - Green: successful (non-secure, S0, S2 non-authenticated),\n        - Magenta: successful (Security S2 Authenticated),\n        - Red: not successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n      1. Power the device.\n      2. Set the main controller into remove mode (see the controller's manual).\n      3. Quickly, three times click one of the buttons.\n      4. LED will start blinking yellow, wait for the removing process to end.\n      5. Successful removing will be confirmed by the Z-Wave controller's message and red LED colour.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. Resetting to factory defaults does not reset energy consumption memory.\n      1. Quickly, three times click, then press and hold one of the buttons to enter the menu.\n      2. Release button when the device glows yellow.\n      3. Quickly click the button to confirm.\n      4. After few seconds the device will be restarted, which is signalled with red LED colour.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3396",
            id: "1000",
            name: "ZWProductPage",
            type: "1D01",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1D01",
          },
          { text: "FGWREU-111", id: "1000", name: "Identifier", type: "1D01" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import from Z-Wave Alliance Database",
                author: "Khashayar Hajian - me@khashayar.me",
                date: "10 July 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "11",
            label: "LED frame – colour when moving",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the LED colour when the motor is running.",
            Item: [
              { label: "LED disabled", value: "0" },
              { label: "White", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Magenta", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "LED frame – colour when not moving",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the LED colour when the device motor is not running.",
            Item: [
              { label: "LED disabled", value: "0" },
              { label: "White", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Magenta", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "LED frame – brightness",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "100",
            Help:
              "\n        This parameter allows to adjust the LED frame brightness.\n        0 - LED disabled\n        1-100 - (1-100% brightness)\n      ",
          },
          {
            genre: "config",
            index: "24",
            label: "Buttons orientation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        This parameter allows reversing the operation of the buttons.\n\n        0 - default (1st button UP, 2nd button DOWN)\n        1 - reversed (1st button DOWN, 2nd button UP)\n      ",
            Item: [
              { label: "Default", value: "0" },
              { label: "Reversed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "25",
            label: "Outputs orientation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        This parameter allows reversing the operation of Q1 and Q2 without changing the wiring (e.g. in case of invalid motor connection).\n\n        0 - default (Q1 - UP, Q2 - DOWN)\n        1 - reversed (Q1 - DOWN, Q2 - UP)\n      ",
            Item: [
              { label: "Default", value: "0" },
              { label: "Reversed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Alarm configuration - 1st slot",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n        This parameter determines to which alarm frames and how the device should react.\n        The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n\n        1B [MSB] - Notification Type\n        2B - Notification Status\n        3B - Event/State Parameters\n        4B [LSB] - action:\n          0x00 - no action,\n          0xX1 - open,\n          0xX2 - close,\n          0x0X - no action on LED frame,\n          0x1X - LED frame blinks red,\n          0x2X - LED frame blinks green,\n          0x4X - LED frame blinks blue,\n          0x8X - dis- able LED frame,\n          0xFX - LED frame LAPD signal (red-white-blue)\n\n        Default value: [0x00, 0x00, 0x00, 0x00] (disabled)\n      ",
          },
          {
            genre: "config",
            index: "31",
            label: "Alarm configuration - 2nd slot (Water)",
            size: "4",
            type: "int",
            value: "1358888960",
            Help:
              "\n        This parameter determines to which alarm frames and how the device should react.\n        The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n\n        1B [MSB] - Notification Type\n        2B – Notification Status\n        3B – Event/State Parameters\n        4B [LSB] – action:\n          0x00 - no action,\n          0xX1 - open,\n          0xX2 - close,\n          0x0X - no action on LED frame,\n          0x1X - LED frame blinks red,\n          0x2X - LED frame blinks green,\n          0x4X - LED frame blinks blue,\n          0x8X - dis- able LED frame,\n          0xFX - LED frame LAPD signal (red-white-blue)\n\n        Default value: [0x05, 0xFF, 0x00, 0x00] (Water Alarm, any notification, no action)\n      ",
          },
          {
            genre: "config",
            index: "32",
            label: "Alarm configuration - 3rd slot (Smoke)",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n        This parameter determines to which alarm frames and how the device should react.\n        The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n\n        1B [MSB] - Notification Type\n        2B - Notification Status\n        3B - Event/State Parameters\n        4B [LSB] - action:\n          0x00 - no action,\n          0xX1 - open,\n          0xX2 - close,\n          0x0X - no action on LED frame,\n          0x1X - LED frame blinks red,\n          0x2X - LED frame blinks green,\n          0x4X - LED frame blinks blue,\n          0x8X - dis- able LED frame,\n          0xFX - LED frame LAPD signal (red-white-blue)\n\n        Default value: [0x01, 0xFF, 0x00, 0x00] (Smoke Alarm, any notification, no action)\n      ",
          },
          {
            genre: "config",
            index: "33",
            label: "Alarm configuration - 4th slot (CO)",
            size: "4",
            type: "int",
            value: "1358888960",
            Help:
              "\n        This parameter determines to which alarm frames and how the device should react.\n        The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n\n        1B [MSB] - Notification Type\n        2B - Notification Status\n        3B - Event/State Parameters\n        4B [LSB] - action:\n          0x00 - no action,\n          0xX1 - open,\n          0xX2 - close,\n          0x0X - no action on LED frame,\n          0x1X - LED frame blinks red,\n          0x2X - LED frame blinks green,\n          0x4X - LED frame blinks blue,\n          0x8X - dis- able LED frame,\n          0xFX - LED frame LAPD signal (red-white-blue)\n\n        Default value: [0x02, 0xFF, 0x00, 0x00] (CO Alarm, any notification, no action)\n      ",
          },
          {
            genre: "config",
            index: "34",
            label: "Alarm configuration - 5th slot (Heat)",
            size: "4",
            type: "int",
            value: "50266112",
            Help:
              "\n        This parameter determines to which alarm frames and how the device should react.\n        The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n\n        1B [MSB] - Notification Type\n        2B - Notification Status\n        3B - Event/State Parameters\n        4B [LSB] - action:\n          0x00 - no action,\n          0xX1 - open,\n          0xX2 - close,\n          0x0X - no action on LED frame,\n          0x1X - LED frame blinks red,\n          0x2X - LED frame blinks green,\n          0x4X - LED frame blinks blue,\n          0x8X - dis- able LED frame,\n          0xFX - LED frame LAPD signal (red-white-blue)\n\n        Default value: [0x02, 0xFF, 0x00, 0x00] (CO Alarm, any notification, no action)\n      ",
          },
          {
            genre: "config",
            index: "35",
            label: "Alarm configuration – duration",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "\n        This parameter defines duration of alarm sequence.\n        When time set in this parameter elapses, alarm is cancelled, LED frame and relay restore normal operation, but do not recover state from before the alarm.\n\n        0 – infinite\n        1-32400 (1s-9h, 1s step) – duration\n\n        Default value: 600 (10min)\n      ",
          },
          {
            genre: "config",
            index: "40",
            label: "First button – scenes sent",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This parameter determines which actions result in sending scene IDs assigned to them.\n        Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent).\n        Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\n\n        1 - Key pressed 1 time\n        2 - Key pressed 2 times\n        4 - Key pressed 3 times\n        8 - Key hold down and key released\n\n        Default value: 0 (no scenes)\n      ",
          },
          {
            genre: "config",
            index: "41",
            label: "Second button – scenes sent",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This parameter determines which actions result in sending scene IDs assigned to them.\n        Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent).\n        Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\n\n        1 - Key pressed 1 time\n        2 - Key pressed 2 times\n        4 - Key pressed 3 times\n        8 - Key hold down and key released\n\n        Default value: 0 (no scenes)\n      ",
          },
          {
            genre: "config",
            index: "60",
            label: "Power reports – include self-consumption",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines whether the power measurements should include power consumed by the device itself.",
            Item: [
              { label: "self-consumption not included", value: "0" },
              { label: "self-consumption included", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "61",
            label: "Power reports – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            units: "%",
            value: "15",
            Help:
              "\n        This parameter defines minimal change (from the last reported) in measured power that results in sending new report.\n        For loads under 50W the parameter is irrelevant, report are sent every 5W change.\n\n        0 - reporting on change disabled\n        1-500 (1-500%, 1% step) – minimal change\n\n        Default value: 15 (15%)\n      ",
          },
          {
            genre: "config",
            index: "62",
            label: "Power reports - periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "second",
            value: "3600",
            Help:
              "\n        This parameter defines reporting interval for measured power.\n        Periodic reports are independent from changes in value (parameter 61).\n\n        0 – periodic reports disabled\n        30-32400 (30s-9h, 1s step) – time interval\n\n        Default value: 3600 (1h)\n      ",
          },
          {
            genre: "config",
            index: "65",
            label: "Energy reports – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            units: "kWh",
            value: "10",
            Help:
              "\n        This parameter defines minimal change (from the last reported) in measured energy that results in sending new report.\n\n        0 - reporting on change disabled\n        1-500 (0.01-5kWh, 0.01kWh step) – minimal change\n\n        Default value: 10 (0.1kWh)\n      ",
          },
          {
            genre: "config",
            index: "66",
            label: "Energy reports - periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "second",
            value: "3600",
            Help:
              "\n        This parameter defines reporting interval for measured energy.\n        Periodic reports are independent from changes in value (parameter 65).\n\n        0 – periodic reports disabled\n        30-32400 (30s-9h, 1s step) – time interval\n\n        Default value: 3600 (1h)\n      ",
          },
          {
            genre: "config",
            index: "150",
            label: "Force calibration",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        By setting this parameter to 2 the device enters the calibration mode.\n        The parameter relevant only if the device is set to work in positioning mode (parameter 151 set to 1 or 2).\n      ",
            Item: [
              { label: "Device is not calibrated", value: "0" },
              { label: "Device is calibrated", value: "1" },
              { label: "Force device calibration", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "151",
            label: "Operating mode",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter allows adjusting operation according to the connected device.",
            Item: [
              { label: "Roller blind", value: "1" },
              { label: "Venetian blind", value: "2" },
              { label: "roller blind with built-in driver", value: "5" },
              {
                label: "roller blind with built-in driver (impulse)",
                value: "6",
              },
            ],
          },
          {
            genre: "config",
            index: "152",
            label: "Venetian blind - time of full turn of the slats",
            max: "65535",
            min: "0",
            size: "4",
            type: "int",
            units: "0.1 second",
            value: "150",
            Help:
              "\n        For Venetian blinds (parameter 151 set to 2) the parameter determines time of full turn cycle of the slats.\n        The parameter is irrelevant for other modes.\n\n        0-65535 (0 - 655.35s, every 0.01s) - time of turn\n\n        Default value: 150 (1.5 seconds)\n      ",
          },
          {
            genre: "config",
            index: "153",
            label: "Set slats back to previous position",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        For Venetian blinds (parameter 151 set to 2) the parameter determines slats positioning in various situations.\n        The parameter is irrelevant for other modes.\n      ",
            Item: [
              {
                label: "Only in case of the main controller operation",
                value: "0",
              },
              {
                label:
                  "In case of the main controller operation, momentary switch operation, or when the limit switch is reached.",
                value: "1",
              },
              {
                label:
                  "In case of the main controller operation, momentary switch operation, when the limit switch is reached or after receiving the Switch Multilevel Stop control frame",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "154",
            label: "Delay motor stop after reaching end switch",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "0.1 second",
            value: "10",
            Help:
              "\n        The parameter determines the time after which the motor will be stopped after end switch contacts are closed.\n\n        1-255 (0.1s - 25.5 seconds)\n      ",
          },
          {
            genre: "config",
            index: "155",
            label: "Motor operation detection",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "watt",
            value: "10",
            Help:
              "\n        Power threshold interpreted as reaching a limit switch.\n\n        1-255 (1-255W) - report interval\n        0 - no detection\n\n        Default value: 10 (10W)\n      ",
          },
          {
            genre: "config",
            index: "156",
            label: "Time of up movement",
            max: "65535",
            min: "1",
            size: "4",
            type: "int",
            units: "0.01 second",
            value: "6000",
            Help:
              "\n        This parameter determines the time needed for roller blinds to reach the top.\n        For modes with positioning value is set automatically during calibration, otherwise, it must be set manually.\n\n        1-65535 (0.01 - 655.35 seconds)\n\n        Default value: 6000 (60 seconds)\n      ",
          },
          {
            genre: "config",
            index: "157",
            label: "Time of down movement",
            max: "65535",
            min: "1",
            size: "4",
            type: "int",
            units: "0.01 second",
            value: "6000",
            Help:
              "\n        This parameter determines the time needed for roller blinds to reach the bottom.\n        For modes with positioning value is set automatically during calibration, otherwise, it must be set manually.\n\n        1-65535 (0.01 - 655.35 seconds)\n\n        Default value: 6000 (60 seconds)\n      ",
          },
        ],
      },
      {
        id: "113",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Roller Shutter", max_associations: "5" },
              { index: "3", label: "Slats", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
