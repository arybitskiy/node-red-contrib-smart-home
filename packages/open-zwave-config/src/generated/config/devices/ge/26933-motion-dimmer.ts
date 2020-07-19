import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3034:494D",
            name: "OzwInfoPage",
          },
          { text: "images/ge/26933-motion-dimmer.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2108/",
            id: "3034",
            name: "ZWProductPage",
            type: "494D",
          },
          { text: "26933", id: "3034", name: "Identifier", type: "494D" },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified\ncontroller to remove a device from the Z-Wave\nnetwork.\n2. Once the controller is ready to remove your device,\npress and release the top button on the smart\ndimmer to remove it from the network.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3034",
            name: "FrequencyName",
            type: "494D",
          },
          {
            text:
              "Press and release the top button ten times within 5\nseconds. The LED will flash 3 times quickly confirming\nchange.\nNote: This should only be used in the event your\nnetwork’s primary controller is missing or otherwise\ninoperable",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified\ncontroller to add the smart dimmer to the Z-Wave\nnetwork.\n2. Once the controller is ready to add your smart\ndimmer, press and release the top or bottom\nbutton on the smart dimmer to include it in the\nnetwork.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2108/26933 EnFrSp QSG v1.3 and Parameters.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Transform any home into a smart home with the GE In-Wall Smart Motion Dimmer. This Z-Wave device replaces you current light switch using your existing wiring and provides Z-Wave wireless control of overhead lighting. The dimmer enables wireless control of On/Off functions of incandescent, LED, xenon, halogen and fluorescent lighting. Not only does it act as a dimmer but the GE In-Wall Smart Motion Dimmer has a built in PIR sensor which can control the local load and be set in occupancy or vacancy mode.",
            name: "Description",
          },
          { text: "In-Wall Smart Motion Dimmer", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2108/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Fix paraleter size as per https://github.com/OpenZWave/open-zwave/pull/1968",
                author:
                  "Peter Gebruers - peter.gebruers@gmail.com on behalf of tech165",
                date: "12 Oct 2019",
                revision: 4,
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
            label: "Timeout Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "5",
            Help: "Amount of time the light stays on after motion stops",
            Item: [
              { label: "5 seconds", value: "0" },
              { label: "1 minute", value: "1" },
              { label: "5 minutes", value: "5" },
              { label: "15 minutes", value: "15" },
              { label: "30 minutes", value: "30" },
              { label: "Disable timeout", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Brightness",
            max: "255",
            min: "1",
            type: "byte",
            value: "3",
            Help: "Valid values are 0-99 or 255 for last dimming level",
          },
          {
            genre: "config",
            index: "3",
            label: "Operation Mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help: "Motion-sensing mode of operation.",
            Item: [
              { label: "Manual", value: "1" },
              { label: "Vacancy", value: "2" },
              { label: "Occupancy", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Invert Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "In a three-way configuration, change the top of the add-on switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Enable/Disable Motion Sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Z-Wave Command Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "8",
            label: "Z-Wave Command Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "9",
            label: "Local Control Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "10",
            label: "Local Control Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "11",
            label: "ALL ON/ALL OFF Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "12",
            label: "ALL ON/ALL OFF Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "13",
            label: "Motion sensing sensitivity",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Item: [
              { label: "High", value: "1" },
              { label: "Medium", value: "2" },
              { label: "Low", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Enable/Disable Light Sensing",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Reset cycle",
            max: "110",
            min: "0",
            type: "short",
            units: "",
            value: "2",
            Help:
              "0 = disable\n                  1 = 10 seconds\n                  2 = 20 seconds\n                  3 = 30 seconds\n                  4 = 45 seconds\n                  ...\n                  110 = 27 minutes 15 seconds \n    \t          ",
          },
          {
            genre: "config",
            index: "16",
            label: "Switch Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "17",
            label: "Switch Level",
            max: "99",
            min: "0",
            type: "byte",
            value: "0",
          },
          {
            genre: "config",
            index: "18",
            label: "Dim Up Rate",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Slow", value: "0" },
              { label: "Fast", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "Exclusion Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Press any button", value: "0" },
              { label: "Press X then press ON", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
              { index: "3", label: "Basic Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
