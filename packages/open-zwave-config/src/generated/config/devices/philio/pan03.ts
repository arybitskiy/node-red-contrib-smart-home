import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Watt meter report period",
            max: "32767",
            min: "1",
            type: "short",
            value: "720",
            Help:
              "If the setting is configured for 1 hour (set value =720), the device will report its instant power consumption every 1 hour to Z-Wave Controller. Unit: 5 seconds.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32767",
            min: "1",
            type: "short",
            value: "6",
            Help:
              "If the setting is configured for 1hour (set value =6), the Micromodule will report its Accumulated Power Consumption (KW/h) every 1 hour to Z-Wave Controller. 10min.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Threshold of current load for Load Caution",
            max: "1100",
            min: "10",
            type: "short",
            value: "1100",
            Help:
              "This is a warning when the current of load over the preset threshold value, if the setting value is 1100 (11A), when the load current of Relay1 over this value, Micromodule will send current meter report to warn the Z-Wave Controller. Unit: 0.01A ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Threshold of KWh for Load Caution",
            max: "10000",
            min: "10",
            type: "short",
            value: "10000",
            Help:
              "This is a warning when the KWh of load over the preset threshold value, if the setting value is 10000, when the Accumulated Power Consumption of Relay1 over this value, Micromodule will send KWH meter report to warn the Z-Wave Controller. Unit: 1KWh",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Restore Switch State Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Whenever the AC power return from lost, Micromodule will restore the switch state which could be \n\t\t\t\tSWITCH OFF\n\t\t\t\tLAST SWITCH STATE\n\t\t\t\tSWITCH ON",
            Item: [
              { label: "SWITCH OFF", value: "0" },
              { label: "LAST SWITCH STATE", value: "1" },
              { label: "SWITCH ON", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Manual ON/OFF Mode",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The On/Off function of S1, S2 and learn switch can be disabled or enabled by this parameter, default value is Enable. But the learning operation won't be affected. When manual On/Off function is disabled, the RF command can only switch On but not Off. This is useful function for keeping the device in switch on state.",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "LED Indication Mode",
            max: "3",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              " LED Indication Mode:\n\t\t\t\t1: SHOW SWITCH STATE: When switch is on, LED is on. When switch is off, LED is off. The default setting is Show Switch State. :\n\t\t\t\t2 :SHOW NIGHT MODE: When switch is on, LED is off. When switch is off, LED is on.\n\t\t\t\t3 : ONE FLASH MODE: When the state of switch changes, LED will be on only one second, then LED keeps off.",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Auto off timer",
            max: "32767",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Whenever Micromodule switches to on, the auto off timer begin to count down. After the timer decrease to zero, it will switch to off automatically. However if Auto off timer is set as 0, the auto off function will be disabled. The default setting is 0.",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "RF Off Command Mode",
            max: "3",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Whenever a switch off command, BASIC_SET, BINARY_SWITCH_SET, SWITCH_ALL_OFF, is received, it could be interpreted as 4 variety of commands: \n\t\t\t\t0: SWITCH OFF:It switches to OFF state. The default setting is Switch Off. \n\t\t\t\t1: IGNORE:The switch off command will be ignored. \n\t\t\t\t2: SWITCH TOGGLE:It switches to the inverse of current state. \n\t\t\t\t3 :SWITCH ON:It switches to ON state",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Edge Mode, Pulse mode or Edge-Toggle mode",
            max: "3",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "Manual switch S1 and S2 can set to Edge mode or Pulse mode or Edge-Toggle mode, default value is Edge mode.\n\t\t\t\t1: EDGE MODE: This mode is suitable for the bi-stable wall switch that has indicator point on the switch, and the same position correspond to same state of relay1. If the Micromodule relay change the state because of receiving Z-Wave RF command, it may need two times of change (switch on to off or switch off to on) to let relay back to the correspond state. Manual switch S2 is disabled in this mode. \n\t\t\t\t2: PULSE MODE: This mode is suitable for the toggle type wall switch to swap the state of Relay1. \n\t\t\t\t3 :EDGE-TOGGLE MODE: This mode is suitable for the normal bi-stable switch, wheneverchange the state of the wall switch will also swap the state of Relay1.",
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { action: "remove", id: "32" },
      { action: "remove", id: "113" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
