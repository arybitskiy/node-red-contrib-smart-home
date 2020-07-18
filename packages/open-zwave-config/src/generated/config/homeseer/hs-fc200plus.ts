import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:0001:0203",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-fc200plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2957/",
            id: "0001",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text:
              "HS-FC200+ is a Z-Wave controllable wired fan controller for use with 3-speed or 4-speed ceiling fans. It has a vertical row of LED’s that indicate the fan speed level.\n\n• Works with 3-speed or 4-speed fans only\n• 4 segment LED dim level indicator\n• Remotely or manually turns ON or OFF, or fan speed level\n• Fits standard wall plates (wall plate not included)\n• Works with any certified gateway supporting Z-Wave",
            name: "Description",
          },
          {
            text:
              "Inclusion: Add the device into your network by a Z-Wave certified controller. HS-FC200+ supports the latest S2 security offered by Z-Wave certified controllers. If your controller supports S2, please refer to the user guide of the controller for detailed instructions on adding devices to the network. You should be able to add HS-FC200+ into your network using the unique QR code or the DSK 5 digit pin located on the product or packaging. In addition, the device can be added or removed using the following 2-step procedure:\n\n1. Put your Z-Wave controller into Inclusion mode. Consult your controller manual if you're unsure how to do this.\n2. Tap the paddle of your new HomeSeer switch to begin the inclusion process. This will take a few moments to complete.",
            name: "InclusionDescription",
          },
          { text: "HS-FC200+", id: "0001", name: "Identifier", type: "0203" },
          {
            text:
              "Exclusion: Remove the device from your network by a Z-Wave certified controller. HS-FC200+ supports the latest S2 security offered by Z-Wave certified controllers. If your controller supports S2, please refer to the user guide of the controller for detailed instructions on removing devices from the network. You should be able to remove HS-FC200+ into your network using the unique QR code or the DSK 5 digit pin located on the product or packaging. In addition, the device can be added or removed using the following 2-step procedure:\n\n1. Put your Z-Wave controller into Exclusion mode. Consult your controller manual if you're unsure how to do this.\n2. Tap the paddle of your new HomeSeer switch to begin the Exclusion process. This will take a few moments to complete.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2957/HS FC200 Manual Market Cert v1.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "Z-Wave RGB Fan Controller", name: "Name" },
          {
            text:
              "To be used only in the event that the network primary controller is lost or otherwise inoperable. \n\n(1) Turn switch on by tapping the top of the paddle once. \n(2) Quickly ap top of the paddle 3 times. \n(3) Quickly tap bottom of paddle 3 times. \n(4) If the LED turns off then on again, switch is reset. If not, repeat manual rest.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2957/xml",
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
            label: "Bottom LED operation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Sets bottom LED operation (in normal mode)",
            Item: [
              { label: "Bottom LED on if load is off", value: "0" },
              { label: "Bottom LED off if load is off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Paddle load orientation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets paddle's load orientation",
            Item: [
              { label: "Top of paddle turns load ON", value: "0" },
              { label: "Bottom of paddle turns load ON", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Fan type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets fan type",
            Item: [
              { label: "3-speed", value: "0" },
              { label: "4-speed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "LED indicator mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets LED indicator mode of operation",
            Item: [
              { label: "Normal mode (load status)", value: "0" },
              { label: "Status mode (custom status)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Normal mode LED color",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Normal mode LED color",
            Item: [
              { label: "White", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "Status mode LED 1 (bottom) color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED 1 (bottom) color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Status mode LED 2 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED 2 color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "23",
            label: "Status mode LED 3 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED 3 color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "24",
            label: "Status mode LED 4 color",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the Status mode LED 4 color",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Magenta", value: "4" },
              { label: "Yellow", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "White", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Blink frequency for all LEDs in Status mode",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Sets the blink frequency for all LEDs in Status mode. Possible values: 0, 1-255\n              0 = No blink\n              1 = 100ms ON then 100ms OFF\n            ",
          },
          {
            genre: "config",
            index: "31",
            label: "LEDs to blink in status mode",
            max: "15",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Sets LEDs 1-4 to blink in Status mode. Bitmask defines specific LEDs to enable for blinking. Note: this decimal value is derived from a hex code calculation based on the following: \n              Bit 0 = LED 1\n              Bit 1 = LED 2\n              Bit 2 = LED 3\n              Bit 3 = LED 4\n              IE: value of 1 = first LED, 8 = LED 4\n            ",
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
