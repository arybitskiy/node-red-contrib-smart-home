import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0267:0000:0001",
            name: "OzwInfoPage",
          },
          { text: "images/simon/10002034-13X.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3279/",
            id: "0000",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "10003034-13X",
            id: "0000",
            name: "Identifier",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3279/991406.pdf",
            name: "ProductManual",
          },
          { text: "S100 Switch IO (China)", name: "Name" },
          {
            text:
              "Simon Electronic Switch IO integrated by Electronic Switch that provides power Switch and Rocker that provides Z-Wave communication attributes.",
            name: "Description",
          },
          {
            text:
              "When the pushbutton is released after a press of (2sec<T<20sec) the device will send a NIF to exclude from Z-Wave network or perform an association with other Z-Wave device.\nMain LED will Blink with 0,3 sec period to inform that NIF can be send after release of pushbutton.\n\nThis process does not perform a default reset of configurations.\n\nMain LED will Blink with 0,3 sec period to inform that NIF can be send after release of pushbutton.",
            name: "ExclusionDescription",
          },
          { text: "China", id: "0000", name: "FrequencyName", type: "0001" },
          {
            text:
              "When the pushbutton is released after a press of (20sec<T) the device will perform a factory default values operation, excluding it from network and resetíng the configuration parameters.\n\nMain LED will perform 1 Blink with 5 sec.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "When the pushbutton is released after a press of (2sec<T<20sec) the device will send a NIF to include from Z-Wave network or perform an association with other Z-Wave device.\nMain LED will Blink with 0,3 sec period to inform that NIF can be send after release of pushbutton.\n\nThis process does not perform a default reset of configurations.\n\nMain LED will Blink with 0,3 sec period to inform that NIF can be send after release of pushbutton.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3279/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "38", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Association LED",
            max: "1",
            min: "255",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tUsed during Association process by Simon Shortcut Switch IO to turn ON the main LED of all devices already associated to this shortcut.\n\t\t\t",
            Item: [
              { label: "Turns the main LED OFF", value: "0" },
              { label: "Turns the main LED ON", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Delay ON",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to choose delay from activation request until load activation.\n\t\t\t\tValue 0 - Instantly (default).\n\t\t\t\tValues from 1 to 127 - 1 second to 127 seconds in 1 second resolution.\n\t\t\t\tValues from 128 to 254 - 1 minute to 127 minutes in 1 minute resolution.\n\t\t\t",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Activation Time",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to chose the time that load performs activated after complete an activation process.\n\t\t\t\tValue 0 - Instantly (default).\n\t\t\t\tValues from 1 to 127 - 1 second to 127 seconds in 1 second resolution.\n\t\t\t\tValues from 128 to 254 - 1 minute to 127 minutes in 1 minute resolution.\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Behavior of LED in Repose",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for Main LED as identification at 20%..",
            Item: [
              { label: "LED OFF", value: "0" },
              { label: "LED ON at 20% of maximum level", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Lock Input",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter locks the pushbutton and wired input actions.",
            Item: [
              { label: "Unlock the direct control of load", value: "0" },
              { label: "Lock the direct control of load", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Reset Default",
            max: "39015",
            min: "39015",
            size: "2",
            type: "list",
            value: "0",
            write_only: "true",
            Help:
              "Parameters, Groups, and Z-Wave status are restored to default (Only writable).",
            Item: [
              {
                label: "Device performs a factory default Reset",
                value: "39015",
              },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Activation Time",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to chose the time that load performs activated after complete an activation process.\n\t\t\t\tValue 0 - Instantly (default).\n\t\t\t\tValues from 1 to 127 - 1 second to 127 seconds in 1 second resolution.\n\t\t\t\tValues from 128 to 254 - 1 minute to 127 minutes in 1 minute resolution.\n\t\t\t",
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "3" }],
          },
        ],
      },
    ],
  },
};

export default config;
