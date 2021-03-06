import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0258:0083:0003",
            name: "OzwInfoPage",
          },
          { text: "images/shenzen_neo/nas-pd01z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1671/",
            id: "0083",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0083",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z‐Wave controller or Z‐Wave gateway into exclusion mode (Refer to the controller or gateway operating manual) \n4.Press the button three times within 1.5 second, the device will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset procedure will delete all information on the Z‐Wave network and Z‐Wave controller or Z‐Wave Gateway, and restore the sensor to factory default settings.\n1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Press and hold the button for 10 seconds, Led will blink once. \n\n4.Release the button. \n\nNote: to use the reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1920/Motion Detector User Guide EU V3.3.pdf",
            name: "ProductManual",
          },
          { text: "Motion Sensor (PIR)", name: "Name" },
          {
            text:
              "1.Remove the sensor cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z‐Wave controller or Z‐Wave gateway into inclusion mode (Refer to the controller or gateway operating manual) \n4.Press the button three times within 1.5 second, the device will enter inclusion mode. And the LED will flash on and off alternately five times.",
            name: "InclusionDescription",
          },
          {
            text:
              "This product can be included and operated in any Z‐Wave network with other Z‐Wave certified devices from other manufacturers and/or other applications. All non‐battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\n\nIn the Back casing, there is a button that is used to carry out include, exclude, wake up device or reset factory default settings.\n\nWhen power is first supplied, the LED will flash on and off alternately at one second intervals within 5 seconds if the detector has not been added a Z‐Wave network. Please get familiar with the terms below before starting the operations.",
            name: "Description",
          },
          { text: "NAS-PD01Z", id: "0083", name: "Identifier", type: "0003" },
          {
            text:
              "You can press the button once to wake up the device and send wakeup notification to controller. If press successfully, the LED will blink one time",
            name: "WakeupDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1920/",
            id: "1083",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "NAS-PD01ZE", id: "1083", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "1083",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1671/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1920/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
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
            instance: "1",
            label: "Sensitivity Level Setting",
            max: "255",
            min: "8",
            size: "1",
            type: "byte",
            value: "12",
            Help:
              "This parameter defines the sensitivity of PIR detector, it is recommended to test the detector with movements from a farthest end of the coverage area at first time of use.\n        If movements cannot be detected sensitively, simply adjust the sensitivity level with this parameter.\n        This Parameter can be configured with the value 8 trough 255, where 8 means high sensitivity and 255 means lowest sensitivity.\n      ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "On/Off Duration",
            max: "600",
            min: "5",
            size: "2",
            type: "short",
            units: "second",
            value: "30",
            Help:
              "This parameter can be determined how long the associated devices should stay ON status.\n        For instance, this parameter is set to 30(second), the PIR detector will send a BASIC_SET Command to an associated device with value basic set level if PIR detector is triggered and the associated device will be turned on 30(second) before it is turned off.\n        This Parameter value must be large than Parameter 6#.\n        If user set this parameter to default by Configure CC, the parameter #6 will be set to default value.\n        Available Settings:5 to 600(second).\n      ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "Basic Set Command will be sent where contains a value when PIR detector is triggered, the receiver will take it for consideration; for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n        This Parameter is used to some associated devices.\n        Available Settings: 0, 1 to 99 or 255.\n      ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "PIR Detecting Function Enabled/Disabled",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter can be enabled or disabled the PIR detector detecting function.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Ambient Illumination Lux Level",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            units: "lux",
            value: "100",
            Help:
              "This parameter can be set a lux level value which determines when the light sensor is activated.\n        If the ambient illumination level falls below this value and a person moves across or within the detected area , PIR detector will send a Z-Wave ON command(i.e. BASIC_SET (value = parameter 3) to an associated device and activate it.\n        0 to 1000(Lux).\n      ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Re-trigger Interval Setting",
            max: "8",
            min: "1",
            size: "1",
            type: "byte",
            units: "second",
            value: "8",
            Help:
              "This Parameter can be used to adjust the interval of being re-triggered after the PIR detector has been triggered.\n        This Parameter value must be less than Parameter 2#.\n        If user set this parameter to default by Configure CC, the parameter #2 will be set to default value.\n        Available Settings: 1 to 8(s).\n      ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Light Sensor Polling Interval",
            max: "36000",
            min: "60",
            size: "2",
            type: "short",
            units: "second",
            value: "180",
            Help:
              "This Parameter can be set the light sensor measure ambient illumination level interval time.\n        NOTE: This Value Must Be less than Wakeup Interval Time.\n        Available Settings: 60 ~ 36000(second).\n      ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Lux Level Function Enable",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "If this parameter is set to Enable, and when Lux level less than the value define by parameter #5, PIR detector will send a BASIC_SET command frame(i.e. BASIC_SET (value = parameter 3) to an associated device and activate it.\n        If Lux Level greater than the value define by parameter #5, PIR detector will not send a BASIC_SET command frame.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Ambient illumination Lux Level Report",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "lux",
            value: "100",
            Help:
              "This parameter defines by how much Lux Level must change, in lux, to be reported to the main controller.",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Led Blink Enable",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter can enabled or disable the PIR led blinking function. ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "4" },
              {
                index: "2",
                label: "Control Commands BASIC_SET",
                max_associations: "4",
              },
              {
                index: "3",
                label: "Send Notification Report",
                max_associations: "4",
              },
              {
                index: "4",
                label: "Send Sensor Binary Report",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
