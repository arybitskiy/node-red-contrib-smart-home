import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3032:494D",
            name: "OzwInfoPage",
          },
          { text: "images/ge/26931-motion-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2035/",
            id: "3032",
            name: "ZWProductPage",
            type: "494D",
          },
          { text: "In-Wall Smart Motion Switch", name: "Name" },
          {
            text:
              "Press and release the top button ten times.\nNote: This should only be used in the event your\nnetwork’s primary controller is missing or otherwise\ninoperable.",
            name: "ResetDescription",
          },
          {
            text: "26931/ZW4006",
            id: "3032",
            name: "Identifier",
            type: "494D",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3032",
            name: "FrequencyName",
            type: "494D",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified\ncontroller to exclude a device from the Z-Wave\nnetwork.\n2. Once the controller is ready to exclude your device,\npress and release the top or bottom button on the\nsmart switch to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Transform any home into a smart home with the GE In-Wall Smart Motion Switch. This Z-Wave device replaces you current light switch using your existing wiring and provides Z-Wave wireless control of overhead lighting. The switch enables wireless control of On/OFF functions of incandescent, LED, xenon, halogen and fluorescent lighting. Not only does it act as a switch but the GE In-Wall Smart Motion Switch has a built in PIR sensor which can control the local and be set in occupancy or vacancy mode.",
            name: "Description",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified\ncontroller to include the smart switch to the\nZ-Wave network.\n2. Once the controller is ready to include your smart\nswitch, press and release the top or bottom button\non the smart switch to include it in the network.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2035/26931 EnFrSp QSG v1.3 and Parameters.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2035/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            min: "0",
            type: "byte",
            value: "255",
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
            label: "Motion Sensor",
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
            label: "Light Sensing",
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
            index: "15",
            label: "Reset cycle",
            max: "110",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "0 = disable\n\t\t\t\t1 = 10 seconds\n\t\t\t\t2 = 20 seconds\n\t\t\t\t3 = 30 seconds\n\t\t\t\t4 = 45 seconds\n\t\t\t\t...\n\t\t\t\t110 = 27 minutes 15 seconds\n\t\t  \t",
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
              {
                index: "2",
                label: "Basic Set local load",
                max_associations: "5",
              },
              { index: "3", label: "Basic Set buttons", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
