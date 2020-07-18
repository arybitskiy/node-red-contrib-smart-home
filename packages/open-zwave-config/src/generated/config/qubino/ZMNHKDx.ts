import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "67", Compatibility: [{ OverridePrecision: [2], Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Input I1 switch type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Input I2 switch type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Input 1 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Input 2 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "2",
            type: "list",
            value: "255",
            Help:
              "Flush on off thermostat module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "I1 Functionality selection",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "1",
            Help:
              "\n                Default value 1.\n                32767 - input I1 does not influence on the Heat and Cool process\n                1 - Input I1 changes the mode of the thermostat between Off and Auto. In this case, function on window sensor is disabled.\n                2 - Input I1 influences on cooling and heating valves according to status of window sensor. In this case, function of Off and Auto selection bi I1 us disabled.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "I2 Functionality selection",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "32767",
            Help:
              "\n                Default value 32767.\n                32767 - input I2 does not influence on the Heat and Cool process\n                From 0 to 990 - set point from 0.0 C to 99.0 C\n                From 1001 to 1150 - set point from -0.1 C to -15.0 C\n                2000 - Input I2 influences on the cooling valve according to status of condense sensor\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power reporting in Watts on power change",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 0",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "32767",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send. 0 - Reporting Disabled.\n                1 - 32767 = 1 second - 32767 seconds.\n                Reporting enabled.\n                Power report is send with time interval set by entered value.\n                Default value 0",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Hysteresis Heating On",
            max: "1127",
            min: "0",
            size: "2",
            type: "short",
            value: "1010",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating on.\n                The parameter can be set from 0 to 1127 where 0 to 127 means from 0.0 C to 12.7 C and from 1001 to 1127 means from - 0.1 C to -12.7 C.\n                Default value 1010 (-1.0 C)\n            ",
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Hysteresis Heating Off",
            max: "1127",
            min: "0",
            size: "2",
            type: "short",
            value: "2",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating off.\n                The parameter can be set from 0 to 1127 where 0 to 127 means from 0.0 C to 12.7 C and from 1001 to 1127 means from - 0.1 C to -12.7 C.\n                Default value 2 (+0.2 C)\n            ",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Hysteresis Cooling On",
            max: "1127",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn cooling on.\n                The parameter can be set from 0 to 1127 where 0 to 127 means from 0.0 C to 12.7 C and from 1001 to 1127 means from - 0.1 C to -12.7 C.\n                Default value 5 (0.5 C)\n            ",
          },
          {
            genre: "config",
            index: "46",
            instance: "1",
            label: "Hysteresis Cooling Off",
            max: "1127",
            min: "0",
            size: "2",
            type: "short",
            value: "1002",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn cooling off.\n                The parameter can be set from 0 to 1127 where 0 to 127 means from 0.0 C to 12.7 C and from 1001 to 1127 means from - 0.1 C to -12.7 C.\n                Default value 1002 (-0.2 C)\n            ",
          },
          {
            genre: "config",
            index: "47",
            instance: "1",
            label: "Antifreeze",
            max: "1127",
            min: "0",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "Set value means at which temperature the device will be turned on even if the thermostat was manually set to off.\n                0 - 127 = 0.0C - 12.7 C.\n                1001 - 1127 = -0.1C - 12.6 C.\n                255 - Antifreeze functionality disabled.\n                Default value 50 (5.0 C).\n            ",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Too low temperature limit",
            max: "1150",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "\n                Default value 50 (Minimum Temperature alarm is 5.0C)\n                1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n                1001 - 1150 = -0.1 C - 15 C\n                Too low temperature limit is set by entered value. In case is set value out of this range, module is changing set value automatically to default value.\n            ",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Too high temperature limit",
            max: "1000",
            min: "1",
            size: "2",
            type: "short",
            value: "700",
            Help:
              "\n                Default value 700 (Minimum Temperature alarm is 70.0C)\n                1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n                Too high temperature limit is set by entered value. In case is set value out of this range, module is changing automatically set value to default value.\n            ",
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Output Switch Selection Q1",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set value means the type of the device that is connected to the Q1 output. The device type can be normally open (NO) or normally close (NC).\n                Available config. parameters (data type is 1 Byte DEC):\n                default value 0\n                0 - When system is turned off the output is 0 V.\n                1 - When system is turned off the output is 230 V.",
            Item: [
              { label: "0V", value: "0" },
              { label: "230V", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Output Switch Selection Q2",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set value means the type of the device that is connected to the Q2 output. The device type can be normally open (NO) or normally close (NC).\n                Available config. parameters (data type is 1 Byte DEC):\n                default value 0\n                0 - When system is turned off the output is 0 V.\n                1 - When system is turned off the output is 230 V.",
            Item: [
              { label: "0V", value: "0" },
              { label: "230V", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Input 1 status on delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value 0\n                1 - 32000 seconds\n                If the value of the parameter is different to 0, means that the influence of this input to heating or cooling will react after inserted time.\n                This parameter has influence only when the window sensor functionality is selected by the parameter no. 11.\n            ",
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Input 1 status off delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value 0\n                1 - 32000 seconds\n                If the value of the parameter is different to 0, means that the influence of this input to heating or cooling will react after inserted time.\n                This parameter has influence only when the window sensor functionality is selected by the parameter no. 11.\n            ",
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Input 2 status on delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value 0\n                1 - 32000 seconds\n                If the value of the parameter is different to 0, means that the influence of this input to heating or cooling will react after inserted time.\n                This parameter has influence only when the condense sensor functionality is selected by the parameter no. 12.\n            ",
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Input 2 status off delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value 0\n                1 - 32000 seconds\n                If the value of the parameter is different to 0, means that the influence of this input to heating or cooling will react after inserted time.\n                This parameter has influence only when the condense sensor functionality is selected by the parameter no. 12.\n            ",
          },
          {
            genre: "config",
            index: "100",
            instance: "1",
            label:
              "Enable / Disable Endpoints I1 or select notification type and event",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Enabling I1 means that Endpoint (I1) will be present on UI.\n                Disabling it will result in hiding the endpoint according to the parameter set value.\n                Additionally, a Notification Type and Event can be selected for the endpoint.\n                NOTE 1: After parameter change, first exclude module (without setting parameters to default value) and then re include the module!\n                NOTE 2: When the parameter is set to value 9 the notifications are send for Home Security.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Home Security; Motion Detection", value: "1" },
              {
                label: "Carbon Monoxide; Carbon Monoxide detected",
                value: "2",
              },
              { label: "Carbon Dioxide; Carbon Dioxide detected", value: "3" },
              { label: "Water Alarm; Water Leak detected", value: "4" },
              { label: "Heat Alarm; Overheat detected", value: "5" },
              { label: "Smoke Alarm; Smoke detected", value: "6" },
              { label: "Sensor binary", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label:
              "Enable / Disable Endpoints I2 or select notification type and event",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Enabling I2 means that Endpoint (I2) will be present on UI.\n                Disabling it will result in hiding the endpoint according to the parameter set value.\n                Additionally, a Notification Type and Event can be selected for the endpoint.\n                NOTE 1: After parameter change, first exclude module (without setting parameters to default value) and then re include the module!\n                NOTE 2: When the parameter is set to value 9 the notifications are send for Home Security.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Home Security; Motion Detection", value: "1" },
              {
                label: "Carbon Monoxide; Carbon Monoxide detected",
                value: "2",
              },
              { label: "Carbon Dioxide; Carbon Dioxide detected", value: "3" },
              { label: "Water Alarm; Water Leak detected", value: "4" },
              { label: "Heat Alarm; Overheat detected", value: "5" },
              { label: "Smoke Alarm; Smoke detected", value: "6" },
              { label: "Sensor binary", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "32536",
            min: "0",
            size: "2",
            type: "short",
            value: "32536",
            Help:
              "\n                Set value is added or subtracted to actual measured value by sensor.\n                From 1 to 100 = value from 0.1C to 10.0C is added to actual measured temperature.\n                From 1001 to 1100 = value from -0.1 C to -10.0 C is subtracted to actual measured temperature.\n                Default value 32536. 32536  offset is 0.0C.\n            ",
          },
          {
            genre: "config",
            index: "120",
            instance: "1",
            label: "Digital temperature sensor reporting",
            max: "127",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter.\n                0 = reporting disabled.\n                1 to 127 = 0,1C to 12,7C, step is 0,1C.\n                Default value is 5 = 0,5C",
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label: "Digital temperature sensor / setpoint selector",
            max: "10",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                If digital temperature sensor is not connected, module can grab measured temperature from external secondary module.\n                Default value is 0.\n            ",
            Item: [
              {
                label:
                  "internal digital temperature sensor is mounted, setpoint is set by controller",
                value: "0",
              },
              {
                label:
                  "(bit 0) temperature is grabbed from external always on sensor with sensor_multilevel_get sent by association 3",
                value: "1",
              },
              {
                label:
                  "(bit 1) temperature is grabbed from external battery powered room sensor declared in parameter 122",
                value: "2",
              },
              {
                label:
                  "(bit 2) setpoint is grabbed from external always on module with thermostat_setpoint_get by association 5",
                value: "4",
              },
              {
                label:
                  "(bit 3) setpoint is grabbed from external battery powered room sensor declared in parameter 122",
                value: "8",
              },
              {
                label:
                  "(bit 1 and bit 3) temperature AND setpoint are grabbed from external battery powered sensor declared in parameter 122",
                value: "10",
              },
            ],
          },
          {
            genre: "config",
            index: "122",
            instance: "1",
            label: "Node ID of external battery powered room sensor",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "If digital temperature sensor is not connected, module can grab measured temperature from external battery powered room sensor defined by this paramater.\n                0 = external battery powered room sensor not in function.\n                1 to 254 = Node ID of external battery powered room sensor.\n                Default value is 0",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "8",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label:
                  "Basic on/off (triggered at change of the output Q1 or Q2 state and reflecting its state) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "3",
                label:
                  "SENSOR_MULTILEVEL_GET (triggered once per minute if Parameter 121 is not 0) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "4",
                label:
                  "Basic on/off (triggered by Too high temperature limit, it send FF) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "THERMOSTAT_SETPOINT_GET (triggered once per minute if Parameter 121 is not 0) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "6",
                label: "Basic on/off (trigged by change of I1) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "7",
                label: "Basic on/off (trigged by change of I2) up to 16 nodes",
                max_associations: "16",
              },
              {
                index: "9",
                label: "Sensor multilevel (trigged by change of temperature)",
                max_associations: "16",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
