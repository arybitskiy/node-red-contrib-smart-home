import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3038:5044",
            name: "OzwInfoPage",
          },
          { text: "images/ge/28167-plugin-dimmer.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2100/",
            id: "3038",
            name: "ZWProductPage",
            type: "5044",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3038",
            name: "FrequencyName",
            type: "5044",
          },
          { text: "Plug-in Smart Dimmer, Single Plug", name: "Name" },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to add\nthe smart dimmer to the Z-Wave network.\n2. Once the controller is ready to add your smart dimmer, single\npress and release the manual/program button on the smart\ndimmer to add it in the network.\nPlease reference the controller/gateway’s manual for instructions.",
            name: "InclusionDescription",
          },
          {
            text: "28167/ZW3104",
            id: "3038",
            name: "Identifier",
            type: "5044",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2100/Binder1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "To return your dimmer to factory defaults:\n1. If plugged in, unplug the dimmer from the receptacle.\n2. Press and hold the top button for at least 3 seconds while you\nplug the dimmer into a receptacle.\nNote: This should only be used in the event your networks’ primary\ncontroller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Plug-In Smart Dimmer. The Smart Dimmer enables wireless control of on/off and dim functions for standard incandescent table and floor lamps, as well as dimmable fluorescent, LED and CFL fixtures and more! Use the dimmer control to customize the lighting output and create the perfect ambiance for any room. The space-saving horizontal module plugs into a standard wall receptacle without blocking the second outlet or obstructing placement of furniture. The Dimmer provides one Z-Wave enabled outlet for the lamp you would like to control. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nremove a device from the Z-Wave network.\n2. Once the controller is ready to remove your device, press and\nrelease the manual/program button on the smart dimmer to\nremove it from the network.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1433/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2100/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            genre: "config",
            index: "3",
            label: "LED Light",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
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
        ],
      },
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
