import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "IN1 Alarm Cancellation Delay",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Input I alarm cancellation delay. Additional delay after an alarm from input IN1 has ceased. The parameter allows you to specify additional time, after which the input no. 1 alarm is cancelled once its violation has ceased. Default 0.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "IN2 Alarm Cancellation Delay",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Input II alarm cancellation delay. Additional delay after an alarm from input IN1 has ceased. The parameter allows you to specify additional time, after which the input no. 1 alarm is cancelled once its violation has ceased. Default 0.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Type of input no. 1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Type of input no. 1, what the input 1 will report if no contact is made. Default 1.",
            Item: [
              { label: "Input NO (Normal Open)", value: "0" },
              { label: "Input NC (Normal Close)", value: "1" },
              { label: "Input MONOSTABLE", value: "2" },
              { label: "Input BISTABLE", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Type of input no. 2",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Type of input no. 2, what the input 2 will report if no contact is made. Default 1.",
            Item: [
              { label: "Input NO (Normal Open)", value: "0" },
              { label: "Input NC (Normal Close)", value: "1" },
              { label: "Input MONOSTABLE", value: "2" },
              { label: "Input BISTABLE", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Type of transmitted control frame for association group 1",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "Type of transmitted control frame for association group 1, activated via input IN1. The parameter allows to specify the type of alarm frame or to force transmission of control commands (BASIC_SET). Default 255 - BASIC SET.",
            Item: [
              { label: "ALARM GENERIC", value: "0" },
              { label: "ALARM SMOKE", value: "1" },
              { label: "ALARM CO", value: "2" },
              { label: "ALARM CO2", value: "3" },
              { label: "ALARM HEAT", value: "4" },
              { label: "ALARM WATER", value: "5" },
              { label: "BASIC_SET", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Type of transmitted control frame for association group 2",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "Type of transmitted control frame for association group 2, activated via input IN1. The parameter allows to specify the type of alarm frame or to force transmission of control commands (BASIC_SET). Default 255 - BASIC SET.",
            Item: [
              { label: "ALARM GENERIC", value: "0" },
              { label: "ALARM SMOKE", value: "1" },
              { label: "ALARM CO", value: "2" },
              { label: "ALARM CO2", value: "3" },
              { label: "ALARM HEAT", value: "4" },
              { label: "ALARM WATER", value: "5" },
              { label: "BASIC_SET", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Forced Level of Dimming group 1",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              'Value of the parameter specifying the forced level of dimming / opening sun blinds when comes "switch on" / "open" command to devices from association group no. 1.\nIn the case of alarm frames the alarm priority is specified. Possible parameter settings: (1 to 99) and 255. Value of 255 makes it possible to activate the device when using the Dimmer module it means activating the device and setting it to the previous stored condition, e.g. when Dimmer is set to 30%, then deactivated, and then reactivated using command 255, it will automatically be set to the previous condition, i.e. 30%. Default 255.',
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Forced Level of Dimming group 2",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              'Value of the parameter specifying the forced level of dimming / opening sun blinds when comes "switch on" / "open" command to devices from association group no. 2. In the case of alarm frames the alarm priority is specified. Possible parameter settings: (1 to 99) and 255. Value of 255 makes it possible to activate the device when using the Dimmer module it means activating the device and setting it to the previous stored condition, e.g. when Dimmer is set to 30%, then deactivated, and then reactivated using command 255, it will automatically be set to the previous condition, i.e. 30%. Default 255.',
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Deactivate transmission of frame cancelling alarm",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'Deactivating transmission of the frame cancelling the alarm or the control frame deactivating the device (Basic). It allows for disabling the deactivation function or the alarm cancellation function for devices associated with the appropriate input of the Fibaro Sensor. NOTE: Information concerning alarm violation or activation commands for devices from association groups are always sent. Default 0. ATTENTION: Information alarm triggered or command enabled for devices with associative groups are always sent. NOTE: Value "Group 1 not sent, Group 2 not sent" is only available in version 2.1 and up',
            Item: [
              { label: "Groups 1 and 2 sent", value: "0" },
              { label: "Group 1 sent, Group 2 not sent.", value: "1" },
              { label: "Group 1 not sent, Group 2 sent.", value: "2" },
              { label: "Group 1 not sent, Group 2 not sent.", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label:
              "Interval between successive readings of temperature sensors",
            max: "255",
            min: "1",
            type: "byte",
            value: "20",
            Help:
              "Interval between successive readings of temperature from all sensors connected to the device in seconds. Possible parameter settings: (1 to 255). Default 20. ATTENTION: taking temperature readings from the sensor does not result in sending a temperature condition report to the central hub.",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label:
              "Interval between forcing to send report concerning the temperature conditions",
            max: "255",
            min: "0",
            type: "byte",
            value: "200",
            Help:
              "Interval between forcing to send report concerning the temperature conditions. The forced report is sent immediately after the next reading of temperature from the sensor, irrespective of the settings of parameter no. 12. Value 0 = Deactivates the function. Default 200. ATTENTION: Frequent sending of temperature condition reports is reasonable when the sensor is located somewhere where can occur rapid changes of ambient temperature. In other cases it is recommended to leave the parameter set to the default value.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Insensitiveness to temperature changes.",
            max: "255",
            min: "0",
            type: "byte",
            value: "8",
            Help:
              "Insensitiveness to temperature changes. This is the maximum acceptable difference between the last reported temperature and the current temperature taken from the sensor. If the temperatures differ by the set value or more, then a report with the current temperature value is sent to the device assigned to association group no. 3. Intervals between taking readings from sensors are specified by parameter no. 10. Possible parameter settings:0 to 255 [0oC to 16oC] [0 oF to 28.8oF] In order to set the appropriate value of the parameter, the following formula should be used: x = delta T x 16 - for Celsius x = delta T x 80 / 9 - for Fahrenheit x  parameter value delta T  maximum acceptable temperature gradient in Celsius or Fahrenheit If the value is set to 0, then information about the temperature will be sent every time, immediately once the readings have been taken from the sensor. Default 8.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Transmitting the alarm or control frame broadcast mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'Transmitting the alarm or control frame in "broadcast" mode (i.e. to all devices within range), information sent in this mode is not repeated by the mesh network. Default 0. ATTENTION: If the broadcast mode of information transmission is activated for a given channel, then transmission of information in singlecast mode to devices assigned to the association group of this channel is deactivated.',
            Item: [
              { label: "Sensor 1 and 2 Broadcast inactive", value: "0" },
              {
                label:
                  "Sensor 1 broadcast mode active, Sensor 2 broadcast mode inactive",
                value: "1",
              },
              {
                label:
                  "Sensor 1 broadcast mode inactive, Sensor 2 broadcast mode active",
                value: "2",
              },
              { label: "Sensor 1 and 2 broadcast mode active", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Scene activation",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable scene functionality. The device offers the possibility of sending commands compatible with Command class scene activation. Information is sent to devices assigned to association group no. 3. Default 0.",
            Item: [
              { label: "Scenes disabled", value: "0" },
              { label: "Scenes enabled", value: "1" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Input IN1",
                max_associations: "5",
              },
              { index: "2", label: "Input IN2", max_associations: "5" },
              {
                auto: "true",
                index: "3",
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
