import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Input 1 switch type",
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
            label: "Input 2 switch type",
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
            index: "3",
            instance: "1",
            label: "Input 3 switch type",
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
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
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
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Input 3 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "When I2 is pressed set point will be set according to the value of this parameter.",
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
            min: "1",
            size: "2",
            type: "list",
            value: "1",
            Help:
              "Default value 1\n\t\t\t\t65535 - input I1 does not influence on the heat/ cool process\n\t\t\t\t1 - input I1 changes the mode of the thermostat between Off and Auto. In this case function on flood sensor (if connected) is disabled.\n\t\t\t\t2 - input I1 influences on cooling and heating valves according to status of flood sensor. In this case function of Off and Auto selection by I1 is disabled",
            Item: [
              { label: "Mode Off and Auto", value: "1" },
              { label: "Disabled Mode Off and Auto", value: "2" },
              { label: "No influence on the heat process", value: "65535" },
            ],
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
            value: "65535",
            Help:
              "default value 65535 | 65535 - input I2 does not influence on the heat/ cool process | From 0 to 990 - Temperature set point from 0.0 C to 99.0 C. When I2 is pressed, temperature set point is automatically set to value defined here. In this case function of condense sensor is disabled. | From 1001 to 1150 - Temperature set point from -0.1 C to -15.0\n\t\t\tC. When I2 is pressed, temperature setpoint is automatically set to value defined here. In this case function of condense sensor is disabled. | 2000 - Input I2 influences on the cooling valve according to status of condense sensor, In this case function of setpoint selection with I2 is disabled.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "I3 Functionality selection",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "65535",
            Help:
              "default value 65535 | 65535 - input I3 does not influence on the heat/ cool process | 1 - input I3 changes the mode of the thermostat between Heat and Cool. In this case function on window sensor is disabled. | 2 - input I3 influences on cooling and heating valves according to status of window sensor. In this case function of Heat and Cool selection by I3 is disabled",
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
            value: "300",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 32767 = 1 second - 32767 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Antifreeze",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help:
              "Set value means at which temperature the heating will be turned on even if the thermostat was manually set to off. The parameter can be set from 0 to 255 where 0 to 128 means from 0.0 C to 12.8 C and from 129 to 255 means from - 0.0 C to -12.8 C.",
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "PWM maximum value",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "default value 100 (Maximum PWM value) | 2-100 = 2%-100%, step is 1%. Max. PWM set by entered value. NOTE: The maximum level may not be lower than the minimum level! ",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "PWM minimum value",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "default value 0 (Minimum PWM value is 0%) | 1-99 = 1%-99%, step is 1%. Max. PWM set by entered value. NOTE: The Minimim level may not exceed Maximum level! ",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "PWM cycle duration",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "Default value 10 (Cycle duration set to 10s) | 1-127 = 1-127s, step is 1s. PWM cycle duration set by entered value. NOTE: PWM cycle duration define the summary of all ON plus OFF time periods. For example if Output is set to 70% with PWM cycle duration of 20s, output will be ON for 14s then OFF 6s, again 14s ON, etc\n\t\t\t",
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "PID value inside deadband",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "When value is set to ZERO PID inside deadband is forced to zero. LASTVALUE means that PID remains on same level as was before entering into deadband",
            Item: [
              { label: "PID value equal ZERO", value: "0" },
              { label: "PID value set to LAST VALUE", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "PID deadband",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "default value 5 (0,5 C) | 0-127 - 0.0 C to 12.7 C, step is 0,1C. NOTE: This parameter defines the zone where PID is not active. If the temperature difference between actual and setpoint is bigger than PID deadband, then the PID will start to regulate the system, otherwise the PID is zero or fixed",
          },
          {
            genre: "config",
            index: "55",
            instance: "1",
            label: "Integral sampling time",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "default value 5 (0,5 C) | 0-127 - 0.0 C to 12.7 C, step is 0,1C. NOTE: Parameter defines the time between samples. On each sample the\n\t\t\tcontroller capture difference between SP-act",
          },
          {
            genre: "config",
            index: "56",
            instance: "1",
            label: "P parameter",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "100",
            Help: "default value 100 | 0 -1000 - P value, step is 1",
          },
          {
            genre: "config",
            index: "57",
            instance: "1",
            label: "I parameter",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "1",
            Help: "default value 1 | 0 -1000 - I value, step is 1",
          },
          {
            genre: "config",
            index: "58",
            instance: "1",
            label: "D parameter",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "1",
            Help: "default value 1 | 0 -1000 - D value, step is 1",
          },
          {
            genre: "config",
            index: "59",
            instance: "1",
            label: "Thermostat mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "default : Heat mode | Heat mode | Cool mode",
            Item: [
              { label: "Heat mode (0)", value: "0" },
              { label: "Cool mode (1)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Too low temperature limit",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "Default value 50 (Too low temperature limit is 5.0C) | 1 - 1000 = 0.1C - 100.0C, step is 0.1C. Too low temperature limit is set by entered value. In case measured temperature is below set value, module sends BasicSet value.",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Too high temperature limit",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "700",
            Help:
              "Default value 700 (too high temperature limit is 70.0C) | 1 - 1000 = 0.1C - 100.0C, step is 0.1C. Too high temperature limit is set by entered value. In case measured temperature is higher than set value, module sends BasicSet value.",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Output Switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              {
                label: "(NC) - When system is turned off the output is 0V",
                value: "0",
              },
              {
                label: "(NO) - When system is turned off the output is 230V",
                value: "1",
              },
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
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 11 must be set to 2! NOTE: Device status on UI change immediately ",
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Input I status off delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 11 must be set to 2! NOTE: Device status on UI change immediately",
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
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 12 must be set to 2000!",
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
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 12 must be set to 2000!",
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label: "Input 3 status on delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 13 must be set to 2! NOTE: Device status on UI change immediately",
          },
          {
            genre: "config",
            index: "75",
            instance: "1",
            label: "Input 3 status off delay",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "default value 0 | 1 - 32000 seconds. If the value of parameter is different to 0, means that the Influence of this input to heating or cooling will react after inserted time. Parameter 13 must be set to 2! NOTE: Device status on UI change immediately",
          },
        ],
      },
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              {
                auto: "false",
                index: "1",
                label:
                  "basic on/off (triggered at change of the output Q state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "2",
                label:
                  "basic on/off (triggered at change of the input I2 state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "3",
                label:
                  "basic on/off (triggered at change of the input I3 state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "4",
                label:
                  "basic on/off (triggered by Too high temperature limit, it send FF)",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "basic on/off (triggered by Too low temperature limit, it send FF)",
                max_associations: "16",
              },
              {
                auto: "true",
                index: "6",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
