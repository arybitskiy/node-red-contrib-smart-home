import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "FGWDEU-111 Walli Dimmer", name: "Name" },
          {
            text:
              "FIBARO Walli Dimmer is a smart wall dimmer designed to control light source via Z-Wave network. It measures active power and energy consumed by the controlled load.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/010f:1000:1C01",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://www.fibaro.com/en/products/smart-switches-and-outlets-walli-dimmer/",
            name: "ProductPage",
          },
          {
            text: "https://manuals.fibaro.com/walli-dimmer/",
            name: "ProductSupport",
          },
          { text: "images/fibaro/fgwd111.png", name: "ProductPic" },
          { text: "https://manuals.fibaro.com", name: "ProductManual" },
          {
            text:
              "FIBARO Walli Dimmer is powered using DC power supply unit so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "To add the device to the Z-Wave network manually:\n1. Power the device.\n2. Set the main controller in add mode(see the controller’s manual).\n3. Quickly, three times click one of the buttons.\n4. LED will start blinking yellow, wait for the adding process to end.\n5. Adding result will be confirmed by the Z-Wave controller’s message and the LED frame:\n• Green – successful (non-secure, S0, S2 non-authenticated),\n• Magenta – successful (Security S2 Authenticated),\n• Red – not successful.",
            name: "InclusionDescription",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n1. Power the device.\n2. Set the main controller into remove mode (see the controller’s manual).\n3. Quickly, three times click one of the buttons.\n4. LED will start blinking yellow, wait for the removing process to end.\n5. Successful removing will be confirmed by the Z-Wave controller’s message and red LED colour.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. Resetting to factory defaults does not reset energy consumption memory.\n1. Quickly, three times click, then press and hold one of the buttons to enter the menu.\n2. Release button when the device glows yellow.\n3. Quickly click the button to confirm.\n4. After few seconds the device will be restarted, which is signalled with red LED colour.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3392",
            id: "1000",
            name: "ZWProductPage",
            type: "1C01",
          },
          { text: "FGWDEU-111", id: "1000", name: "Identifier", type: "1C01" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1C01",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Creation of config file - https://products.z-wavealliance.org/Products/3392/XML",
                author: "Makooy - marc@makooy.nl",
                date: "10 July 2019",
                revision: 1,
              },
              {
                text:
                  "Change definition of params 30-34 to fix https://github.com/domoticz/domoticz/issues/3557",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "06 September 2019",
                revision: 2,
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
              "This parameter determines how the device will react in the event of power supply failure (e.g. power outage). The parameter is not relevant for outputs set to pulse mode (parameter 150/151 set to 2).\n\t\t0 - remains switched off after restoring power\n\t\t1 - restores remembered state after restoring power\n\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Overload safety switch",
            max: "5000",
            min: "0",
            size: "4",
            type: "int",
            value: "3500",
            Help:
              "This function allows to turn off the controlled device in case of exceeding the defined power. Controlled device can be turned back on via the button or sending a control frame.\n\t\t0 - function disabled\n\t\t10-5000 - (1.0-500.0W, step 0.1W) – power threshold\n\t\t",
          },
          {
            genre: "config",
            index: "10",
            label: "LED frame – power limit",
            max: "5000",
            min: "100",
            size: "4",
            type: "int",
            value: "3500",
            Help:
              "This parameter determines maximum active power. Exceeding it results in the LED frame flashing violet. Function is active only when parameter 11 is set to 8 or 9.\n\t\t100-5000 - (10.0-500.0W, step 0.1W) – power threshold\n\t\t",
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
              "This parameter defines the LED colour when thedevice is ON. When set to 8 or 9, LED frame colour will change depending on he measured power and parameter 10. Other colours are set permanently and do not depend on power consumption.\n\t\t",
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
              "This parameter defines the LED colour when the device is OFF.\n\t\t",
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
              "This parameter allows to adjust the LED frame brightness.\n\t\t0 - LED disabled\n\t\t1-100 - (1-100% brightness)\n\t\t101 - brightness directly proportional to measured power\n\t\t102 - brightness inversely proportional asured powerto me\n\t\t",
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
              "This parameter allows reversing the operation of the buttons.\n\t\t",
            Item: [
              {
                label: "Default (1st button brightens, 2nd button dims)",
                value: "0",
              },
              {
                label: "Reversed (1st button dims, 2nd button brightens)",
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
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n\t\t",
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
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n\t\t",
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
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n\t\t",
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
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n\t\t",
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
              "This parameter determines to which alarm frames and how the device should react. The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n1B:  [MSB] Notification Type, 2B:  Notification Status, 3B: Event/State Parameters, 4B: [LSB] action\n0xX0: no action on output, 0xX1: turn ON, 0xX2: turn OFF, 0xX3: turn ON/OFF continuously, 0x0X: no action on LED frame, 0x1X: LED frame blinks red, 0x2X: LED frame blinks green, 0x4X: LED frame blinks blue, 0x8X: disable LED frame, 0xFX: LED frame LAPD signal (red-white-blue)\n\t\t",
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
              "This parameter defines duration of alarm sequence.  When time set in this parameter elapses, alarm is cancelled, LED frame and relay restore normal operation, but do not recover state from before the alarm.\n\t\t0 - Infinite\n\t\t1-32400 - (1s-9h, 1s step) – Duration\n\t\t",
          },
          {
            genre: "config",
            index: "40",
            label: "First button – scenes sen",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This parameter determines which actions result in sending scene IDs assigned to them. Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent). Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\n\t\t\t\t1 - Key pressed 1 time\n\t\t\t\t2 - Key pressed 2 time\n\t\t\t\t4 - Key pressed 3 time\n\t\t\t\t8 - Key hold down and key released\n\t\t",
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
              "This parameter determines which actions result in sending scene IDs assigned to them. Values can be combined (e.g. 1+2=3 means that scenes for single and double click are sent). Enabling scenes for triple click disables entering the device in learn mode by triple clicking.\n\t\t1 - Key pressed 1 time\n\t\t2 - Key pressed 2 time\n\t\t4 - Key pressed 3 time\n\t\t8 - Key hold down and key released\n\t\t",
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
              "This parameter determines whether the power measurements should include power consumed by the device itself.\n\t\t",
            Item: [
              { label: "Self-consumption not included", value: "0" },
              { label: "Self-consumption included", value: "1" },
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
            value: "15",
            Help:
              "This parameter defines minimal change (from the last reported) in measured power that results in sending new report. For loads under 50W the parameter is irrelevant, report are sent every 5W change.\n\t\t0 - Reporting on change disabled\n\t\t1-500 - (1-500%, 1% step) – Minimal change\n\t\t",
          },
          {
            genre: "config",
            index: "62",
            label: "Power reports – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured power. Periodic reports are independent from changes in value (parameter 61).\n\t\t0 - periodic reports disabled\n\t\t30-32400 - (30s-9h, 1s step) – time interval\n\t\t",
          },
          {
            genre: "config",
            index: "65",
            label: "Energy reports – on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "This parameter defines minimal change (from the last reported) in measured energy that results in sending new report.\n\t\t0 - reporting on change disabled\n\t\t1-500 - (0.01-5kWh, 0.01kWh step) – minimal change\n\t\t",
          },
          {
            genre: "config",
            index: "66",
            label: "Energy reports – periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines reporting interval for measured energy. Periodic reports are independent from changes in value (parameter 65).\n\t\t0 - periodic reports disabled\n\t\t30-32400 - (30s-9h, 1s step) – time interval\n\t\t",
          },
          {
            genre: "config",
            index: "150",
            label: "Minimum brightness level",
            max: "98",
            min: "1",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter is set automatically during the calibration process, but can be changed manually after the calibration.\n\t\t1-98 - (1-98%, 1% step) – level of brightness\n\t\t",
          },
          {
            genre: "config",
            index: "151",
            label: "Maximum brightness level",
            max: "99",
            min: "2",
            size: "1",
            type: "byte",
            value: "99",
            Help:
              "This parameter is set automatically during the calibration process, but can be changed manually after the calibration.\n\t\t2-99 - (2-99%, 1% step) – level of brightness\n\t\t",
          },
          {
            genre: "config",
            index: "152",
            label: "Incandescence level of dimmable compact fluorescent lamps",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "The virtual value set as a percentage level between parameters MIN (1%) and MAX. (99%). The device will set to this value after the first switch on. It is required for warming up and switching dimmable compact fluorescent lamps and certain types of light sources.\n\t\t1-99 - (1-98%, 1% step) – level of brightness\n\t\t",
          },
          {
            genre: "config",
            index: "153",
            label: "Incandescence time of dimmable compact fluorescent lamps",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter determines the time required for switching compact fluorescent lamps and certain types of light sources. Setting this parameter to 0 will disable the incandescence functionality.\n\t\t0-255 - (0-25.5s, 0.1s step) – incandescence time\n\t\t",
          },
          {
            genre: "config",
            index: "154",
            label: "Automatic control – dimming step size",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter defines the percentage value of dimming step during the automatic control.\n\t\t0-99 - (1-99%, 1% step) – dimming step\n\t\t",
          },
          {
            genre: "config",
            index: "155",
            label: "Automatic control – time of dimming step",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "1",
            Help:
              "This parameter defines the time of performing a single dimming step set in parameter 154 during the automatic control.\n\t\t0-255 - This parameter defines the time of performing a single dimming step set in parameter 154 during the automatic control.\n\t\t",
          },
          {
            genre: "config",
            index: "156",
            label: "Manual control – dimming step size",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter defines the percentage value of the dimming step during the manual control.\n\t\t1-99 - (1-99%, 1% step) – dimming step\n\t\t",
          },
          {
            genre: "config",
            index: "157",
            label: "Manual control – time of dimming step",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "This parameter defines the time of performing a single dimming step set in parameter 156 during the manual control.\n\t\t0-255 - (0-2.55s, 10ms step)\n\t\t",
          },
          {
            genre: "config",
            index: "158",
            label: "Auto-off functionality",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter allows to automatically switch off the device after a specified time from switching the light source on. It may be useful when the device is installed in the stairway.\n\t\t0 - auto-off disabled\n\t\t1-32767 - (1s-9.1h, 1s step) – auto-off time\n\t\t",
          },
          {
            genre: "config",
            index: "159",
            label: "Force auto-calibration",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Changing value of this parameter will force the calibration process. During the calibration parameter is set to 1 or 2 and switched to 0 upon completion.\n\t\t",
            Item: [
              { label: "Readout", value: "0" },
              {
                label: "Force auto-calibration without FIBARO Bypass 2",
                value: "1",
              },
              {
                label: "Force auto-calibration with FIBARO Bypass 2",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "160",
            label: "Auto-calibration status (read-only parameter)",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines operating mode of the device (automatic/manual settings).\n\t\t",
            Item: [
              {
                label:
                  "Calibration procedure not performed or the device operates on manual settings",
                value: "0",
              },
              {
                label: "The device operates on auto-calibration settings",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "161",
            label: "Burnt out bulb detection",
            max: "99",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines percentage power variation (compared to power consumption measured during the calibration) to be interpreted as load error/burnt out bulb.\n\t\t0 - function disabled\n\t\t1-99 - (1-99%, 1% step) – power variation\n\t\t",
          },
          {
            genre: "config",
            index: "162",
            label: "Time delay of a burnt out bulb and overload detection",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "This parameter defines detection delay for the burnt out bulb (parameter 161) and overload (parameter 2).\n\t\t0 - detection of a burnt out bulb disabled\n\t\t1-255 - (1-255s, 1s step) – time delay\n\t\t",
          },
          {
            genre: "config",
            index: "163",
            label:
              "First button – Switch ON value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value sent with Switch OFF command to devices associated in 2nd and 3rd association group.\n\t\t0-99 - value sent\n\t\t254 - send value equal to the current level\n\t\t255 - value sent\n\t\t",
          },
          {
            genre: "config",
            index: "164",
            label:
              "Second button – Switch OFF value sent to 2nd and 3rd association groups",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter defines value sent with Switch ON command to devices associated in 2nd and 3rd association group.\n\t\t0-99 - value sent\n\t\t254 - send value equal to the current level\n\t\t255 - value sent\n\t\t",
          },
          {
            genre: "config",
            index: "165",
            label: "Double click – set level",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            value: "99",
            Help:
              "This parameter defines brightness level set after double-clicking any of the buttons. The same value is also sent to devices associated with 2nd and 3rd association group.\n\t\t0-99 - (0-99%, 1% step) – set level\n\t\t",
          },
          {
            genre: "config",
            index: "170",
            label: "Load control mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter allows to set the desired load control mode. Auto-calibration sets value of this parameter to 2 (control mode recognized during auto-calibration), but the installer may force control mode using this parameter. After changing parameter value, turn the load OFF and ON to change control mode.\n\t\t",
            Item: [
              { label: "Forced leading edge", value: "0" },
              { label: "Forced trailing edge", value: "1" },
              {
                label:
                  "Control mode selected automatically (based on auto-calibration)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "171",
            label:
              "Load control mode recognized during auto-calibration (read only)",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to read load control mode that was set during auto-calibration.\n\t\t",
            Item: [
              { label: "Leading edge", value: "0" },
              { label: "Trailing edge", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "172",
            label: "ON/OFF mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This mode is necessary while connecting non-dimmable light sources. Setting this parameter to 1 automatically ignores brightening/dimming time settings. Forced auto-calibration will set this parameter’s value to 2.\n\t\t",
            Item: [
              {
                label: "ON/OFF mode disabled (dimming is possible)",
                value: "0",
              },
              {
                label: "ON/OFF mode enabled (dimming is not possible)",
                value: "1",
              },
              { label: "Mode selected automatically", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "173",
            label: "Dimmability of the load (read only)",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to read if the load detected during calibration procedure is dimmable.\n\t\t",
            Item: [
              { label: "Load recognized as dimmable", value: "0" },
              { label: "Load recognized as non-dimmable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "174",
            label: "Soft-start functionality",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter allows to set time required to warm up the filament of halogen bulb.\n\t\t",
            Item: [
              { label: "No soft-start", value: "0" },
              { label: "Short soft-start (0.1s)", value: "1" },
              { label: "Long soft-start (0.5s)", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "175",
            label: "Auto-calibration after power on",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter determines the trigger of auto-calibration procedure, e.g. power on, load error, etc.\n\t\t",
            Item: [
              { label: "No auto-calibration after power on", value: "0" },
              { label: "Auto-calibration after each power on", value: "2" },
              {
                label:
                  "Auto-calibration after each LOAD ERROR (no load, load failure, burnt out bulb), if parameter 176 is set to 1 also after SURGE (output overvoltage) and OVERCURRENT (output overcurrent)",
                value: "3",
              },
              {
                label:
                  "Auto-calibration after each power on or after each LOAD ERROR (no load, load failure, burnt out bulb), if parameter 176 is set to 1 also after SURGE (output overvoltage) and OVERCURRENT (output overcurrent)",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "176",
            label: "Behaviour after OVERCURRENT or SURGE",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Error occurrences related to surge or overcurrent results in turning off the output to prevent possible malfunction. By default the device performs three attempts to turn on the load (useful in case of temporary, short failures of the power supply).\n\t\t",
            Item: [
              {
                label:
                  "Device permanently disabled until re-enabling by command or external switch",
                value: "0",
              },
              { label: "Three attempts to turn on the load", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "177",
            label: "Brightness level correction for flickering loads",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "Correction reduces spontaneous flickering of some capacitive loads (e.g. dimmable LEDs) at certain brightness levels in 2-wire installation.\n\t\tIn countries using ripple-control, correction may cause changes in brightness. In this case it is necessary to disable correction or adjust the time of correction for flickering loads.\n\t\t0 - automatic correction disabled\n\t\t1-254 - (1-254s, 1s step) – duration of correction\n\t\t255 - automatic correction always enabled\n\t\t",
          },
          {
            genre: "config",
            index: "178",
            label: "Method of calculating the active power",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines how to calculate active power. It is useful in a case of 2-wire connection with light sources other than resistive.\n\t\t",
            Item: [
              {
                label: "Measurement based on the standard algorithm",
                value: "0",
              },
              {
                label: "Approximation based on the calibration data",
                value: "1",
              },
              { label: "Approximation based on the control angle", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "179",
            label: "Approximated power at the maximum brightness level",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This parameter determines the approximate value of the power that will be reported by the device at its maximum brightness level.\n\t\t0-500 - (0-500W, 1W step) – power consumed by the load at the maximum brightness level.\n\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              { index: "2", label: "On/Off", max_associations: "5" },
              { index: "3", label: "Dimmer", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
