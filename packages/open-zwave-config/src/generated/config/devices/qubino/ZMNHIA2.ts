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
            index: "3",
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
            label: "Set point set by I2",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "65535",
            Help:
              "\n\t\t\t\tWhen I2 is pressed set point will be set according to the value of this parameter.\n\t\t\t\tdefault value 65535\n\t\t\t\t65535 - input I2 does not influence on the set point\n\t\t\t\tFrom 0 to 990 - set point from 0.0 C to 99.0 C\n\t\t\t\tFrom 1001 to 1150 - set point from -0.1 C to -15.0 C\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Set point set by I3",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "65535",
            Help:
              "\n\t\t\t\tWhen I3 is pressed set point will be set according to the value of this parameter.\n\t\t\t\tdefault value 65535\n\t\t\t\t65535 - input I2 does not influence on the set point\n\t\t\t\tFrom 0 to 990 - set point from 0.0 C to 99.0 C\n\t\t\t\tFrom 1001 to 1150 - set point from -0.1 C to -15.0 C\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the relay after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              {
                label:
                  "Module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Module does not save the state after a power failure, it returns to off position",
                value: "1",
              },
            ],
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
            value: "5",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 5",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "65535",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 - 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Hysteresis On",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "132",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating on. The parameter can be set from 0 to 255 where 0 to 128 means from 0.0 C to 12.8 C and from 129 to 255 means from - 0.0 C to -12.8 C.",
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Hysteresis Off",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "132",
            Help:
              "This parameter defines temperature min difference between real measured temperature and set-point temperature to turn heating off. The parameter can be set from 0 to 255 where 0 to 128 means from 0.0 C to 12.8 C and from 129 to 255 means from - 0.0 C to -12.8 C.",
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
            index: "60",
            instance: "1",
            label: "Minimum Temperature alarm",
            max: "1000",
            min: "1",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "\n\t\t\t\tDefault value 50 (Minimum Temperature alarm is 5.0C)\n\t\t\t\t1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n\t\t\t\tMinimum temperature alarm is set by entered value. In case is set value out of this range, module is changing set value automatically to default value\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Maximum Temperature alarm",
            max: "1000",
            min: "1",
            size: "2",
            type: "short",
            value: "700",
            Help:
              "\n\t\t\t\tDefault value 700 (Minimum Temperature alarm is 70.0C)\n\t\t\t\t1 - 1000 = 0.1C - 100.0C, step is 0.1C.\n\t\t\t\tMaximum temperature alarm is set by entered value. In case is set value out of this range, module is changing set value automatically to default value\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Set value means the type of the heating device that is connected to the relay output. The heating device type can be normally open (NO) or normally close (NC).",
            Item: [
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
            ],
          },
        ],
      },
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
                  "basic on/off (triggered at change of the Alarm too high temperature state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "basic on/off (triggered at change of the Alarm too low temperature state and reflecting its state)",
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
      { id: "67", Compatibility: [{ Base: [0] }] },
    ],
  },
};

export default config;
