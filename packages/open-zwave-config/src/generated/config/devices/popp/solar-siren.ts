import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0002:0004",
            name: "OzwInfoPage",
          },
          { text: "images/popp/solar-siren.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2085/",
            id: "0002",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "POPE005107", id: "0002", name: "Identifier", type: "0004" },
          { text: "Outdoor Solar Siren", name: "Name" },
          {
            text:
              "1. Open the case and turn on the power switch 2. Remove the metal mounting plate from the device. 3. Turn your controller into inclusion mode with a short single click on the internal inclusion button.",
            name: "InclusionDescription",
          },
          {
            text:
              "This device also allows to be reset without any involvement of a Z-Wave controller. This procedure should only be used when the primary controller is inoperable.\n\nTo reset the device keep the inclusion button pushed for 10 seconds. After 5 seconds the LED starts flashing and after another 5 seconds there is a short beep signaling the successful reset back to factory defaults. Use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "This solar powered outdoor siren can be used without any additional power supply or batteries. It can be installed on any place on the outside of the house and can be controlled using Z-Wave. The device will issue a very loud sound (105 dBm) and in parallel some stroboscope light as well. The siren is self-protecting. Removing the main device from the mounting unit immediately starts the siren and also reports the tamper attempt to the Z-Wave central controller. All communication between the Z-Wave controller and the siren is encrypted and secured to protect against manipulation.  Thanks to the large solar panel the siren can be mounted on nearly every place outside the house, with direct or indirect sun light. The siren is maintenance-free and water-proofed (IP56). The average solar energy of one day keeps the device alive for up to 50 days (without using the siren). Additionally an internal temperature sensor reports the temperature inside the siren’s enclosure.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "1. Open the case and turn on the power switch 2. Remove the metal mounting plate from the device. 3. Turn your controller into exclusion mode with a short single click on the internal inclusion button.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2085/005107_en.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2085/xml",
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
            instance: "1",
            label: "Siren triggering mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Sets the tamper triggering mode when removed from the holder",
            Item: [
              {
                label:
                  "The Siren triggers automatically when it's removed from the holder. Must be turned off, using the button or from the controller (Default)",
                value: "0",
              },
              {
                label:
                  "The Siren triggers automatically when it's removed from the holder and turns off, when placed back on the holder",
                value: "1",
              },
              {
                label:
                  "Siren doesn't trigger at all, when removed from the holder. Service Mode",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Temperature adjustments",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "Temperature correction. For positive value 10 = 1 C, for negative value x = 256 - (TC * 10). Example, if need shift -2.6C, value calculate: 256 - (2.6 * 10) = 230 Default: 0",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Send unsolicited temperature report",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help: "Threshold temperature to send unsolicited report. 10 = 1C",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Send unsolicited temperature report after N wake up",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "15",
            Help:
              "If the value is set, after N wake up number (measurement is every 4 minutes) the temperature report will be sent. By default it's 15 = every 1 hour",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Switch mode",
            size: "1",
            type: "list",
            value: "2",
            Help: "Siren only, flash only, flash + siren",
            Item: [
              { label: "Siren only", value: "0" },
              { label: "Flash only", value: "1" },
              { label: "Flash + Siren (Default)", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Auto OFF",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "5",
            Help:
              "If the value is set, the siren will be switched off automatically after a defined alarm time.\n\t\t\t\t0: No auto off\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "10" }],
          },
        ],
      },
    ],
  },
};

export default config;
