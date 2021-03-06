import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Sensitivity",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "200",
            Help:
              "\n\t\t\t\tSensitivity sets the amount of motion required for the device to\n\t\t\t\tdetect motion. A higher value makes it more sensitive and a\n\t\t\t\tlower value makes it less sensitive. Note that values above 200\n\t\t\t\tare not recommended when the device is battery operated.\n\t\t\t\tRecommended values:\n\t\t\t\t10 = Pet Immune.\n\t\t\t\t100 = Medium sensitivity for hallways.\n\t\t\t\t200(default) = Highly sensitive for rooms where people are sitting still.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "On Time",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "20",
            Help:
              "\n\t\t\t\tOn Time sets the number of minutes that the lights stay on when\n\t\t\t\tmotion has not been detected.\n\t\t\t\tA value of 0 On Time is a special mode where the lights are\n\t\t\t\tconstantly sent a command to turn them on whenever motion is\n\t\t\t\tdetected. The device will NOT turn the lights off in this mode.\n\t\t\t\tNote that this mode will significantly shorten battery life.\n\t\t\t\tRecommended values:\n\t\t\t\t5 min for hallways.\n\t\t\t\t20 min for an office environment.\n\t\t\t\t60 min for a library or other room where someone may be sitting\n\t\t\t\tstill for a long time.\n\t\t\t\tThis may be inaccurate, but default for Homeseer HSM100 may actually be 3 minutes, instead of 20?\t\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "LED ON/OFF",
            max: "",
            min: "",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tLED ON/OFF turns the LED on or off. A slight improvement in\n\t\t\t\tbattery life is obtained by turning the LED off. Setting LED\n\t\t\t\tON/OFF to zero will turn the LED off and 255 turns it on.\n\t\t\t\tDefault is On (255).\n\t\t\t",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Light Threshold",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "100",
            Help:
              "\n\t\t\t\tLight Threshold is the percentage of light in the room above\n\t\t\t\twhich the lights will not be turned on. Light Threshold is often\n\t\t\t\tused in room with a lot of natural daylight. Setting Light\n\t\t\t\tThreshold to a value of 50% will cause the device to not turn the\n\t\t\t\tlights on when the natural light in the room is already at the 50%\n\t\t\t\tvalue. This feature only prevents the lights from coming on when\n\t\t\t\tmotion is first detected and the light level in the room is already\n\t\t\t\tabove Light Threshold. It will not turn the lights off when the\n\t\t\t\tamount of natural light in the room increases. It will\n\t\t\t\tautomatically turn on the lights in a room that has motion in it\n\t\t\t\tand that the amount of natural light has dropped below Light\n\t\t\t\tThreshold.\n\t\t\t\tA value of 100% turns off this feature (default).\n\t\t\t\tRecommended values:\n\t\t\t\tUsually a value between 40% and 60% will prevent the lights\n\t\t\t\tfrom coming on in a reasonably well light room and will turn\n\t\t\t\tthem on as it is getting dark. Some experimentation is required\n\t\t\t\twith each room to determine the proper setting.\t\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Stay Awake",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tSetting Stay Awake to a non-zero value will cause the device to\n\t\t\t\talways be awake. NOTE: this mode should NOT be used when\n\t\t\t\tthe device is battery powered! Batteries will only last a few days\n\t\t\t\tin this mode.\n\t\t\t\tStay Awake is NOT set to the factory default (0) when the device\n\t\t\t\tis Excluded (reset) from the Z-Wave network.\n\t\t\t\tSetting Stay Awake to a non-zero value will cause the Z-Wave\n\t\t\t\tListening Bit to be set. The device will become a routing node in\n\t\t\t\tthe Z-Wave Mesh-Network when the Listening Bit is set.\n\t\t\t\tTo properly have the device included in the routing tables, set\n\t\t\t\tStay Awake to a non-zero value, then reset the device (Exclude\n\t\t\t\tfrom the network), then add it back to the network. The new\n\t\t\t\trouting information will be used now that the listening bit is set.\n\t\t\t\tDefaults to 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "On Value",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tOn Value is the value sent by the Z-Wave BASIC_SET\n\t\t\t\tcommand when motion is detected.\n\t\t\t\tA value of 0 will turn the lights off (not recommended).\n\t\t\t\tA value between 1 and 100 will set the dim level to between 1%\n\t\t\t\tand 100%.\n\t\t\t\tA value of 255 will turn the light on (default).\n\t\t\t\tNB! According to the manual, the value should not be set between 101-254 (inclusive).\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "TempAdj",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tTempAdj is a twos-complement number that is used to adjust the temperature reading to make it more accurate.\n\t\t\t\tThe value programmed is in tenths of degree Fahrenheit.\n\t\t\t\tThe temperature reading can be adjusted up to +12.7F to -12.8F.\n\t\t\t\tA value of 1 will adjust the temperature reading by +0.1F.\n\t\t\t\tA value of -1 will adjust the temperature by -0.1F.\n\t\t\t\tA value of 123 will adjust the temperature by +12.3F.\n\t\t\t\tTempAdj is NOT changed when Excluded (reset) from the Z- Wave network.\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Reports",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tBit mask for disabling the sending of sensor reports at each WakeUp interval.\n\t\t\t\tBit 0=Temperature\n\t\t\t\tBit 1=Luminance\n\t\t\t\tBit 2=Battery level\n\t\t\t\tSetting the respective but to a 1 will disable the sending of the sensor report at each WakeUp interval.\n\t\t\t\tA value of 7 will disable all sensors.\n\t\t\t\tNote that the controller can still request a sensor report but the sensor will not be sent automatically.\n\t\t\t\tDisabling sensors will improve battery life.\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Motion", max_associations: "4" }],
          },
        ],
      },
    ],
  },
};

export default config;
