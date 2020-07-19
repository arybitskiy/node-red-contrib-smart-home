import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "FGWDSEU-221 Walli Double Switch", name: "Name" },
          {
            text:
              "FIBARO Walli Double Switch is a smart wall switch designed to control one or two light sources via Z-Wave network. It measures active power and energy consumed by the controlled load.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/010f:1000:1B01",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://www.fibaro.com/en/products/smart-switches-and-outlets-walli-switch/",
            name: "ProductPage",
          },
          {
            text: "https://manuals.fibaro.com/walli-switch/",
            name: "ProductSupport",
          },
          { text: "images/fibaro/fgwds221.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/3395/FGWDSEU-221-T-EN-0.19.pdf",
            name: "ProductManual",
          },
          {
            text:
              "FIBARO Walli Double Switch is powered using DC power supply unit so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "To add the device to the Z-Wave network manually:\r\n1. Power the device.\r\n2. Set the main controller in add mode(see the controller’s manual).\r\n3. Quickly, three times click one of the buttons.\r\n4. LED will start blinking yellow, wait for the adding process to end.\r\n5. Adding result will be confirmed by the Z-Wave controller’s message and the LED frame:\r\n• Green – successful (non-secure, S0, S2 non-authenticated),\r\n• Magenta – successful (Security S2 Authenticated),\r\n• Red – not successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\r\n1. Power the device.\r\n2. Set the main controller into remove mode (see the controller’s manual).\r\n3. Quickly, three times click one of the buttons.\r\n4. LED will start blinking yellow, wait for the removing process to end.\r\n5. Successful removing will be confirmed by the Z-Wave controller’s message and red LED colour.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. Resetting to factory defaults does not reset energy consumption memory.\r\n1. Quickly, three times click, then press and hold one of the buttons to enter the menu.\r\n2. Release button when the device glows yellow.\r\n3. Quickly click the button to confirm.\r\n4. After few seconds the device will be restarted, which is signalled with red LED colour.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3395",
            id: "1000",
            name: "ZWProductPage",
            type: "1B01",
          },
          { text: "FGWDSEU-221", id: "1000", name: "Identifier", type: "1B01" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1B01",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Creation of config file - https://products.z-wavealliance.org/Products/3395/XML",
                author: "Makooy - marc@makooy.nl",
                date: "07 July 2019",
                revision: 1,
              },
              {
                text:
                  "Change definition of params 30-34 to fix https://github.com/domoticz/domoticz/issues/3557",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "06 September 2019",
                revision: 2,
              },
              {
                text: "Add Product Picture",
                author: "Justin Hammond",
                date: "24 June 2020",
                revision: 3,
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
            index: "1",
            label: "Remember device state",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter determines how the device will react in the event of power supply failure (e.g. power outage). The parameter is not relevant for outputs set to pulse mode (parameter 150/151 set to 2).\r\n\t\t0 - remains switched off after restoring power\r\n\t\t1 - restores remembered state after restoring power\r\n\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "First channel – overload safety switch",
            max: "36200",
            min: "0",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "This function allows to turn off the controlled device in case of exceeding the defined power. Controlled device can be turned back on via button or sending a control frame.\r\n\t\t0 - Function disabled\r\n\t\t10-36200 - (1.0-3620.0W, step 0.1W) – Power threshold\r\n\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Second channel – overload safety switch",
            max: "36200",
            min: "0",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "This function allows to turn off the controlled device in case of exceeding the defined power. Controlled device can be turned back on via button or sending a control frame.\r\n\t\t0 - Function disabled\r\n\t\t10-36200 - (1.0-3620.0W, step 0.1W) – Power threshold\r\n\t\t",
          },
          {
            genre: "config",
            index: "10",
            label: "LED frame – power limit",
            max: "30000",
            min: "500",
            size: "4",
            type: "int",
            value: "30000",
            Help:
              "This parameter determines maximum active power. Exceeding it results in the LED frame flashing violet. Function is active only when parameter 11 is set to 8 or 9.\r\n\t\t(50.0-3000.0W, step 0.1W) – power threshold\r\n\t\t",
          },
          {
            genre: "config",
            index: "11",
            label: "LED frame – colour when ON",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the LED colour when thedevice is ON. When set to 8 or 9, LED frame colour will change depending on he measured power and parameter 10. Other colours are set permanently and do not depend on power consumption.\r\n\t\t",
            Item: [
              { label: "LED disabled", value: "0" },
              { label: "White", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Magenta", value: "7" },
              {
                label: "Colour changes smoothly depending on measured power",
                value: "8",
              },
              {
                label: "Colour changes in steps depending on measured power",
                value: "9",
              },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "LED frame – colour when OFF",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the LED colour when thedevice is ON. When set to 8 or 9, LED frame colour will change depending on he measured power and parameter 10. Other colours are set permanently and do not depend on power consumption.\r\n\t\t",
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
            max: "102",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "This parameter allows to adjust the LED frame brightness.\r\n\t\t0 - LED disabled\r\n\t\t1-100 - (1-100% brightness)\r\n\t\t101 - brightness directly proportional to measured power\r\n\t\t102 - brightness inversely proportional asured powerto me\r\n\t\t",
          },
          {
            genre: "config",
            index: "20",
            label: "Buttons operation",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines how device buttons should control the channels.",
            Item: [
              { label: "1st and 2nd button toggle both channels", value: "1" },
              {
                label:
                  "1st button turns both channels ON, 2nd button turns both channels OFF",
                value: "2",
              },
              {
                label:
                  "1st button toggles 1st channel, 2nd button toggles 2nd channel",
                value: "3",
              },
              {
                label:
                  "1st button single click turns 1st channel ON, 1st button double click turns 2nd channel ON, 2nd button single click turns both channels OFF",
                value: "4",
              },
            ],
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
              "This parameter allows reversing the operation of the buttons.",
            Item: [
              {
                label:
                  "Default (1st button controls 1st channel, 2nd button controls 2nd channel)",
                value: "0",
              },
              {
                label:
                  "Reversed (1st button controls 2nd channel, 2nd button controls 1st channel)",
                value: "1",
              },
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
              "This parameter allows reversing the operation of Q1 and Q2 without changing the wiring (e.g. in case of invalid connection). Changing orientation turns both outputs off.",
            Item: [
              {
                label: "Default (Q1 - 1st channel, Q2 - 2nd channel)",
                value: "0",
              },
              {
                label: "Reversed (Q1 - 2nd channel, Q2 - 1st channel)",
                value: "1",
              },
            ],
          },
          {
            type: "int",
            index: "30",
            genre: "config",
            label: "Alarm configuration - 1st slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\r\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\r\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\r\n\t\t",
          },
          {
            type: "int",
            index: "31",
            genre: "config",
            label: "Alarm configuration - 2nd slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\r\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\r\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\r\n\t\t",
          },
          {
            type: "int",
            index: "32",
            genre: "config",
            label: "Alarm configuration - 3rd slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\r\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\r\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\r\n\t\t",
          },
          {
            type: "int",
            index: "33",
            genre: "config",
            label: "Alarm configuration - 4th slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\r\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\r\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\r\n\t\t",
          },
          {
            type: "int",
            index: "34",
            genre: "config",
            label: "Alarm configuration - 5th slot",
            value: "0",
            min: "0",
            max: "4294967295",
            Help:
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\r\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\r\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\r\n\t\t",
          },
          {
            genre: "config",
            index: "35",
            label: "Alarm configuration – duration",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "This parameter defines duration of alarm sequence.  When time set in this parameter elapses, alarm is cancelled, LED frame and relay restore normal operation, but do not recover state from before the alarm.\r\n\t\t0 - Infinite\r\n\t\t1-32400 - (1s-9h, 1s step) – Duration\r\n\t\t",
          },
          {
            genre: "config",
            index: "40",
            label: "First button – scenes sent",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This parameter determines which actions result in sending scene IDs assigned to them. Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent). Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\r\n\t\t\t\t1 - Key pressed 1 time\r\n\t\t\t\t2 - Key pressed 2 time\r\n\t\t\t\t4 - Key pressed 3 time\r\n\t\t\t\t8 - Key hold down and key released\r\n\t\t",
          },
          {
            genre: "config",
            index: "41",
            label: "Second button – scenes sent",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This parameter determines which actions result in sending scene IDs assigned to them. Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent). Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\r\n\t\t1 - Key pressed 1 time\r\n\t\t2 - Key pressed 2 time\r\n\t\t4 - Key pressed 3 time\r\n\t\t8 - Key hold down and key released\r\n\t\t",
          },
          {
            genre: "config",
            index: "60",
            label: "Power reports – include self-consumption",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines whether the power measurements should include power consumed by the device itself.\r\n\t\t",
            Item: [
              { label: "Self-consumption not included", value: "0" },
              { label: "Self-consumption included", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "61",
            label: "Power reports for first channel – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "15",
            Help:
              "This parameter defines minimal change (from the last reported) in measured power that results in sending new report. For loads under 50W the parameter is irrelevant, report are sent every 5W change.\r\n\t\t0 - Reporting on change disabled\r\n\t\t1-500 - (1-500%, 1% step) – Minimal change\r\n\t\t",
          },
          {
            genre: "config",
            index: "62",
            label: "Power reports for first channel – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured power. Periodic reports are independent from changes in value (parameter 61).\r\n\t\t0 - periodic reports disabled\r\n\t\t30-32400 - (30s-9h, 1s step) – time interval\r\n\t\t",
          },
          {
            genre: "config",
            index: "63",
            label: "Power reports for second channel – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "15",
            Help:
              "This parameter defines minimal change (from the last reported) in measured power that results in sending new report. For loads under 50W the parameter is irrelevant, report are sent every 5W change.\r\n\t\t0 - Reporting on change disabled\r\n\t\t1-500 - (1-500%, 1% step) – Minimal change\r\n\t\t",
          },
          {
            genre: "config",
            index: "64",
            label: "Power reports for second channel – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured power. Periodic reports are independent from changes in value (parameter 63).\r\n\t\t0 - periodic reports disabled\r\n\t\t30-32400 - (30s-9h, 1s step) – time interval\r\n\t\t",
          },
          {
            genre: "config",
            index: "65",
            label: "Energy reports for first channel – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "This parameter defines minimal change (from the last reported) in measured energy that results in sending new report.\r\n\t\t0 - reporting on change disabled\r\n\t\t1-500 - (0.01-5kWh, 0.01kWh step) – minimal change\r\n\t\t",
          },
          {
            genre: "config",
            index: "66",
            label: "Energy reports for first channel – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured energy. Periodic reports are independent from changes in value (parameter 66).\r\n\t\t0 - periodic reports disabled\r\n\t\t30-32400 - (30s-9h, 1s step) – time interval\r\n\t\t",
          },
          {
            genre: "config",
            index: "67",
            label: "Energy reports for second channel – on change",
            max: "500",
            min: "0",
            size: "4",
            type: "int",
            value: "10",
            Help:
              "This parameter defines minimal change (from the last reported) in measured energy that results in sending new report.\r\n\t\t0 - reporting on change disabled\r\n\t\t1-500 - (0.01-5kWh, 0.01kWh step) – minimal change\r\n\t\t",
          },
          {
            genre: "config",
            index: "68",
            label: "Energy reports for second channel – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured energy. Periodic reports are independent from changes in value (parameter 67).\r\n\t\t0 - periodic reports disabled\r\n\t\t30-32400 - (30s-9h, 1s step) – time interval\r\n\t\t",
          },
          {
            genre: "config",
            index: "150",
            label: "First channel – operating mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for the 1st channel.\r\n\t\t",
            Item: [
              { label: "Standard operation", value: "0" },
              { label: "Delayed OFF", value: "1" },
              { label: "Single pulse", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "151",
            label: "Second channel – operating mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for the 2nd channel.\r\n\t\t",
            Item: [
              { label: "Standard operation", value: "0" },
              { label: "Delayed OFF", value: "1" },
              { label: "Single pulse", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "152",
            label:
              "First channel - reaction to switch for delayed OFF / pulse modes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines how the device in timed mode reacts to pushing the button for 1st channel. The parameter is relevant only for button toggles modes (parameter 20 set to 1 or 3).\r\n\t\t",
            Item: [
              { label: "Cancel mode and set default state", value: "0" },
              { label: "No reaction - mode runs until it ends", value: "1" },
              {
                label: "Reset timer - start counting from the beginning",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "153",
            label:
              "Second channel - reaction to switch for delayed OFF / pulse modes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines how the device in timed mode reacts to pushing the button for 2nd channel. The parameter is relevant only for button toggles modes (parameter 20 set to 1 or 3).\r\n\t\t",
            Item: [
              { label: "Cancel mode and set default state", value: "0" },
              { label: "No reaction - mode runs until it ends", value: "1" },
              {
                label: "Reset timer - start counting from the beginning",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "154",
            label:
              "First channel - time parameter for delayed OFF / pulse modes",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "This parameter allows to set time parameter used in timed modes for 1st channel (parameter 150). Delay time for switching off or duration of the pulse.\r\n\t\t0 - 0.1 second\r\n\t\t1-32000 - 1-32000s, 1s step – time parameter\r\n\t\t",
          },
          {
            genre: "config",
            index: "155",
            label:
              "Second channel - time parameter for delayed OFF / pulse modes",
            max: "32000",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "This parameter allows to set time parameter used in timed modes for 2nd channel (parameter 151). Delay time for switching off or duration of the pulse.\r\n\t\t0 - 0.1 second\r\n\t\t1-32000 - 1-32000s, 1s step – time parameter\r\n\t\t",
          },
          {
            genre: "config",
            index: "156",
            label:
              "First channel – Switch ON value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value sent with Switch ON command to devices associated in 2nd and 3rd association group for manual changes of Endpoint 1 state.\r\n\t\t0-99 - 2nd association group\r\n\t\t255 - 3rd association group\r\n\t\t",
          },
          {
            genre: "config",
            index: "157",
            label:
              "First channel – Switch OFF value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines value sent with Switch OFF command to devices associated in 2nd and 3rd association group for manual changes of Endpoint 1 state.\r\n\t\t0-99 - 2nd association group\r\n\t\t255 - 3rd association group\r\n\t\t",
          },
          {
            genre: "config",
            index: "158",
            label:
              "First channel – Double Click value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "99",
            Help:
              "This parameter defines value sent with Double Click command to devices associated in 2nd and 3rd association group for manual changes of Endpoint 1 state.\r\n\t\t0-99 - 2nd association group\r\n\t\t255 - 3rd association group\r\n\t\t",
          },
          {
            genre: "config",
            index: "159",
            label:
              "Second channel – Switch ON value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value sent with Switch ON command to devices associated in 4th and  5th association group for manual changes of Endpoint 2 state.\r\n\t\t0-99 - 4th association group\r\n\t\t255 - 5th association group\r\n\t\t",
          },
          {
            genre: "config",
            index: "160",
            label:
              "Second channel – Switch OFF value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines value sent with Switch OFF command to devices associated in 4th and 5th association group for manual changes of Endpoint 2 state.\r\n\t\t0-99 - 4th association group\r\n\t\t255 - 5th association group\r\n\t\t",
          },
          {
            genre: "config",
            index: "161",
            label:
              "Second channel – Double Click value sent to 4th and 5th association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "99",
            Help:
              "This parameter defines value sent with Double Click command to devices associated in 4th and 5th association group for manual changes of Endpoint 2 state.\r\n\t\t0-99 - 4th association group\r\n\t\t255 - 5th association group\r\n\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              { index: "2", label: "On/Off S1", max_associations: "5" },
              { index: "3", label: "Dimmer S1", max_associations: "5" },
              { index: "4", label: "On/Off S1", max_associations: "5" },
              { index: "5", label: "Dimmer S1", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
