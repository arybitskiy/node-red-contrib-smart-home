import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/shenzen_neo/nas-pd02z.png", name: "ProductPic" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Fix parameters for temperature model, based on user feedback https://github.com/OpenZWave/open-zwave/issues/1866",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "06 July 2019",
                revision: 2,
              },
              {
                text: "Add Product Pic Entry",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Motion detection sensitivity",
            value: "12",
            min: "8",
            max: "255",
            size: "1",
            Help: "Adapt the sensitivity of the motion detection.",
            Item: [
              { label: "High Sensitivity", value: "8" },
              { label: "Normal Sensitivity", value: "12" },
              { label: "Lower Sensitivity", value: "128" },
              { label: "Lowest Sensitivity", value: "255" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Motion detection ON time",
            units: "second",
            value: "30",
            min: "5",
            max: "600",
            size: "2",
            Help:
              "This parameter can be determined how long the associated devices should stay ON status.\n        For instance, this parameter is set to 30(second), the PIR detector will send a BASIC_SET Command to an associated device with value basic set level if PIR detector is triggered and the associated device will be turned on 30(second) before it is turned off.\n        This Parameter value must be large than Parameter 6#.\n        If user set this parameter to default by Configure CC, the parameter #6 will be set to default value.\n        Available Settings:5 to 600(second).\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Basic Set Level",
            value: "255",
            min: "0",
            max: "255",
            size: "1",
            Help:
              "Basic Set Command will be sent, on the associated devices (group 2), where contains a value when PIR detector is triggered, the receiver will take it for consideration; for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n        This Parameter is used to some associated devices.\n        Available Settings: 0, 1 to 99 or 255.\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Motion detection function",
            value: "1",
            size: "1",
            Help:
              "\n        Enable the motion detection (PIR) function.\n        This parameter does not effect the luminance reporting.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Ambient Illumination Lux Level",
            units: "lux",
            value: "100",
            min: "0",
            max: "1000",
            size: "2",
            Help:
              "\n        Define the illumination level value which determines when the 'Illumination switch ON function' is activated.\n        If the illumination level falls below this value and a person moves across or within the detected area, the motion sensor will switch on the associated device (group 2).\n        0 to 1000(Lux).\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Motion detection blind time",
            units: "second",
            value: "8",
            min: "1",
            max: "8",
            size: "1",
            Help:
              "\n        Period after motion detection in which the sensor is insensitive for new motion detection.\n        This value must be less than the 'Motion detection ON time'.\n        Available Settings: 1 to 8(s).\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Illumination reporting interval",
            units: "second",
            value: "180",
            min: "60",
            max: "36000",
            size: "2",
            Help:
              "\n        Determine the time between illumination reports, even when value has not changed.\n        NOTE: This Value Must Be less than Wakeup Interval Time.\n        Available Settings: 60 ~ 36000(second).\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Illumination function",
            value: "0",
            size: "1",
            Help:
              "\n        Enable the function to switch on a associated device (group 2) once motion has been detected and the illumination level will be less than the value specified in 'Illumination switch ON level'.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Illumination report threshold",
            units: "lux",
            value: "25",
            min: "0",
            max: "255",
            size: "1",
            Help:
              "This parameter defines by how much Lux Level must change, in lux, to be reported to the main controller.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "10",
            label:
              "Ambient Temperature Differential Level Report or Led Blink Enable (0 or 1 - non-temperature version)",
            units: "0.1 C",
            value: "5",
            min: "0",
            max: "127",
            size: "1",
            Help:
              "This parameter is configured the value that differential between current measured and previous report value. If the differential value larger than the settings, device will report this measured temperature value to nodes associated in lifeline.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Led Blink Enable (temperature reporting version)",
            value: "1",
            size: "1",
            Help:
              "This parameter can enabled or disable the PIR led blinking function. ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "12",
            label:
              "Motion Event Report One Time Enable (temperature reporting version)",
            value: "1",
            size: "1",
            Help:
              "The motion detected event can be sent multiple times/only once until device report motion cleared event. ",
            Item: [
              { label: "multiple times", value: "0" },
              { label: "only once", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "99",
            label: "Ambient Light Intensity Calibration",
            value: "1000",
            min: "1",
            max: "65536",
            size: "2",
            Help:
              "This parameter defines the calibrated scale for ambient light intensity.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "4", label: "Lifeline" },
              {
                index: "2",
                max_associations: "4",
                label: "Control Commands BASIC_SET",
              },
              {
                index: "3",
                max_associations: "4",
                label: "Send Notification Report",
              },
              {
                index: "4",
                max_associations: "4",
                label: "Send Sensor Binary Report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
