import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0315:3031:4447",
            name: "OzwInfoPage",
          },
          { text: "images/zwp/PA-100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2810/",
            id: "3031",
            name: "ZWProductPage",
            type: "4447",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/2810/ZL-PA-100%20UG%20v3.pdf",
            name: "ProductManual",
          },
          { text: "Z-Wave Plug-In On/Off Switch", name: "Name" },
          { text: "PA-100", id: "3031", name: "Identifier", type: "4447" },
          {
            text:
              'Place your Z-Wave controller in "Exclusion" mode. Then tap the button to initiation Exclusion.',
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Unplug the PA-100 from the AC outlet and also unplug the power plugs of the lighting from the module (if plugged in)\n2. Press and hold the button on the PA-100\n3. Plug the PA-100 back into the AC outlet with the button pressed\nAfter 3 seconds, release the button. If you see the button blink, that means that PA-100 has been reset successfully.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
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
              'Place your Z-Wave controller in "Inclusion" mode. Then tap the button once to initiation Inclusion.',
            name: "InclusionDescription",
          },
          {
            text:
              "ZLINK PA-100 is a Z-Wave Plus certified device with S2 security and SmartStart features. You can now add this device securely and with ease using QR code on the product with compatible gateways supporting S2 and Smart Start. PA-100 communicates with other Z-Wave certified devices and updates your home into a smart home. PA-100 can be used to turn On or Off lamps or AC operated appliances. Each Z-Wave device also serves as a node to repeat the signal in the network, thus, extending the overall Z-Wave mesh wireless network range.\nAdditional Features:\n• Power 120 VAC, 60Hz, up to 1800 watts\n• Region US: 908.4, 916 MHz\n• Works with incandescent, CFL & LED lights & appliances\n• Plugs into Standard AC outlet\n• LED backlit On/Off button\n• Control lights or appliances via schedule or remotely\n• Second wall AC outlet remains free\n• Works with any gateway supporting Z-Wave",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2810/xml",
                author: "emc2cube - https://github.com/emc2cube/",
                date: "10 Jun 2019",
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
            instance: "1",
            index: "3",
            value: "0",
            label: "Nightlight",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help:
              "DEFAULT: the LED indicator will be OFF when the connected appliance is ON, and the LED indicator will be ON when the connected appliance is OFF.\nINVERTED: the LED indicator will be OFF when the connected appliance is OFF, and the LED indicator will be ON when the connected appliance is ON.\nOFF: the LED indicator will be always OFF regardless of the load status.",
            Item: [
              { value: "0", label: "Default" },
              { value: "1", label: "Inverted" },
              { value: "2", label: "Off" },
            ],
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
