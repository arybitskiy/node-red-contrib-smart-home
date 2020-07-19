import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0315:3034:4447",
            name: "OzwInfoPage",
          },
          { text: "images/zwp/WD-100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2808/",
            id: "3034",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2808/ZL-WD-100 UG v3.pdf",
            name: "ProductManual",
          },
          { text: "Z-Wave In-Wall Dimmer", name: "Name" },
          { text: "WD-100", id: "3034", name: "Identifier", type: "4447" },
          {
            text:
              'Place your Z-Wave controller in "Exclusion" mode. Then tap either the top or bottom paddle once to initiation Exclusion.',
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Turn the connected light ON with the rocker\n2. Quickly tap the topside of the rocker 3 times\n3. Then quickly tap the bottom side of the rocker 3 times\nIf you see the lights turn OFF then ON it means that the module has been rest successfully.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3034",
            name: "FrequencyName",
            type: "4447",
          },
          {
            text:
              'Place your Z-Wave controller in "Inclusion" mode. Then tap either the top or bottom paddle once to initiation Inclusion.',
            name: "InclusionDescription",
          },
          {
            text:
              "ZLINK’s WD-100 is a Z-Wave Plus certified device with S2 security and SmartStart features. You can now add this device securely and with ease using QR code on the product with compatible gateways supporting S2 and Smart Start. The elegant WD-100, with 7 LED dim level lights, communicates with other Z-Wave certified devices and updates your home into a smart home. WD-100 replaces a standard in-wall light switch turning it into a Z-Wave controlled network device with manual and remote control dimming and On/Off light control. ZLINK WD-100 supports, “Instant Feedback” of manual status to compatible gateways as well as Central Scene to allow setting multiple scene control throughout the home, with gateways supporting Central Scene. Each Z-Wave device serves as a node to repeat the signal in the network, thus, extending the overall Z-Wave mesh wireless network range.\nAdditional Features:\n• Power 120 VAC, 60Hz, up to 600 watts\n• Region US: 908.4, 916 MHz\n• Works w/ most incandescent, dimmable CFL & LED lights\n• 7 segment LED dim level indicator\n• Remotely or manually turns ON or OFF, or DIM lights\n• Fits standard wall plates (wall plate not included)\n• Works with any certified gateway supporting Z-Wave",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2299/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2808/xml",
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
            index: "4",
            instance: "1",
            label: "Orientation",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Controls the on/off orientation of the rocker switch",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Remote dim level increment",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Number of dim levels to change for each dim step when remotely commanded",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Remote dim step duration",
            max: "255",
            min: "1",
            size: "2",
            type: "short",
            units: "10ms",
            value: "3",
            Help: "Interval between dimming steps when remotely commanded",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Dim Level Increment",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "Indicates the number of levels (1-99) to change dimming each step",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Step Duration",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "milliseconds",
            value: "3",
            Help:
              "The number of tens of milliseconds (1-255) to delay on each dimming step.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
