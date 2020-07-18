import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "67", Compatibility: [{ OverridePrecision: [2] }] },
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Input I1 switch type",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Input I2 switch type",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Input I3 switch type",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Input 1 contact type",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Input 2 contact type",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Input 3 contact type",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            size: "2",
            min: "0",
            max: "255",
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
            type: "short",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Set point set by I2",
            size: "2",
            min: "0",
            max: "65535",
            value: "32767",
            Help:
              "\n                When I2 is pressed set point will be set according to the value of this parameter.\n                Default value 32767.\n                32767 - input I2 does not influence on the set point\n                From 0 to 990 - set point from 0.0 C to 99.0 C\n                From 1001 to 1150 - set point from -0.1 C to -15.0 C\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Set point set by I3",
            size: "2",
            min: "0",
            max: "65535",
            value: "32767",
            Help:
              "\n                When I3 is pressed set point will be set according to the value of this parameter.\n                Default value 32767.\n                32767 - input I2 does not influence on the set point\n                From 0 to 990 - set point from 0.0 C to 99.0 C\n                From 1001 to 1150 - set point from -0.1 C to -15.0 C\n            ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "30",
            label: "Saving the state of the relay after a power failure",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "If Disabled, after a power failure, module return to OFF position.",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Power reporting in Watts on power change",
            size: "1",
            min: "0",
            max: "100",
            value: "3",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 3",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "42",
            label: "Power reporting in Watts by time interval",
            min: "0",
            max: "65535",
            value: "300",
            Help:
              "Set value means time interval (0 - 65535) in seconds, when power report is send. 0 - Reporting Disabled.\n                1 - 65535 = 1 second - 65535 seconds.\n                Reporting enabled.\n                Power report is send with time interval set by entered value.\n                Default value 300 (power report in Watts is send each 300s)",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "43",
            label: "Hysteresis On",
            size: "2",
            min: "0",
            max: "255",
            value: "132",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating on.\n                The parameter can be set from 0 to 255 where 0 to 128 means from 0.0 C to 12.8 C and from 129 to 255 means from - 0.0 C to -12.8 C.\n                Default value 132 (-0.5 C)\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "44",
            label: "Hysteresis Off",
            size: "2",
            min: "0",
            max: "255",
            value: "5",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating off.\n                The parameter can be set from 0 to 255 where 0 to 128 means from 0.0 C to 12.8 C and from 129 to 255 means from - 0.0 C to -12.8 C.\n                Default value 5 (+0.5 C)\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "45",
            label: "Antifreeze",
            size: "2",
            min: "0",
            max: "255",
            value: "50",
            Help:
              "Set value means at which temperature the device will be turned on even if the thermostat was manually set to off.\n                0 - 127 = 0.0C - 12.7 C.\n                128 - 254 = -0.1C - 12.6 C.\n                255 - Antifreeze functionality disabled.\n                Default value 50 (5.0 C).\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "60",
            label: "Too low temperature limit",
            size: "2",
            min: "1",
            max: "1000",
            value: "50",
            Help:
              "\n                Default value 50 (Minimum Temperature alarm is 5.0C)\n                1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n                Too low temperature limit is set by entered value. In case is set value out of this range, module is changing set value automatically to default value.\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "61",
            label: "Too high temperature limit",
            size: "2",
            min: "1",
            max: "1000",
            value: "700",
            Help:
              "\n                Default value 700 (Minimum Temperature alarm is 70.0C)\n                1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n                Too high temperature limit is set by entered value. In case is set value out of this range, module is changing automatically set value to default value.\n            ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "63",
            label: "Switch selection",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Set value means the type of the device that is connected to the relay output. The device type can be normally open (NO) or normally close (NC).\n                Available config. parameters (data type is 1 Byte DEC):\n                default value 0\n                0 - When system is turned off the output is 0 V.\n                1 - When system is turned off the output is 230 V.",
            Item: [
              { label: "0V", value: "0" },
              { label: "230V", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "100",
            label:
              "Enable / Disable Endpoints I1 or select notification type and event",
            size: "1",
            min: "0",
            max: "9",
            value: "1",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "101",
            label:
              "Enable / Disable Endpoints I2 or select notification type and event",
            size: "1",
            min: "0",
            max: "9",
            value: "1",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "102",
            label:
              "Enable / Disable Endpoints I3 or select notification type and event",
            size: "1",
            min: "0",
            max: "9",
            value: "1",
            Help:
              "\n                Enabling I3 means that Endpoint (I3) will be present on UI.\n                Disabling it will result in hiding the endpoint according to the parameter set value.\n                Additionally, a Notification Type and Event can be selected for the endpoint.\n                NOTE 1: After parameter change, first exclude module (without setting parameters to default value) and then re include the module!\n                NOTE 2: When the parameter is set to value 9 the notifications are send for Home Security.\n            ",
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
            type: "short",
            genre: "config",
            instance: "1",
            index: "110",
            label: "Temperature sensor offset settings",
            min: "0",
            max: "32536",
            value: "32536",
            Help:
              "\n                Set value is added or subtracted to actual measured value by sensor.\n                From 1 to 100 = value from 0.1C to 10.0C is added to actual measured temperature.\n                From 1001 to 1100 = value from -0.1 C to -10.0 C is subtracted to actual measured temperature.\n                Default value 32536. 32536  offset is 0.0C.\n            ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "120",
            label: "Digital temperature sensor reporting",
            min: "0",
            max: "127",
            value: "5",
            Help:
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter.\n                0 = reporting disabled.\n                1 to 127 = 0,1C to 12,7C, step is 0,1C.\n                Default value is 5 = 0,5C",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "7",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              {
                index: "2",
                max_associations: "16",
                label:
                  "Basic on/off (triggered at change of the output Q state and reflecting its state)",
              },
              {
                index: "3",
                max_associations: "16",
                label: "Basic on/off (triggered at change of thermostat mode)",
              },
              {
                index: "6",
                max_associations: "16",
                label: "Basic on/off (trigged by change of I1) up to 16 nodes",
              },
              {
                index: "7",
                max_associations: "16",
                label: "Basic on/off (trigged by change of I2) up to 16 nodes",
              },
              {
                index: "8",
                max_associations: "16",
                label: "Basic on/off (trigged by change of I3) up to 16 nodes",
              },
              {
                index: "9",
                max_associations: "16",
                label: "Sensor multilevel (trigged by change of temperature)",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
