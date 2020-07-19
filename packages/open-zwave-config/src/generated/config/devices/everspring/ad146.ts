import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0002:0003",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/ad146.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1057/",
            id: "0002",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "The In-Wall Dimmer Module is a Z-Wave enabled device which is fully compatible with any Z-Wave enabled network.  Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks.  Inclusion of this unit on other manufacturer’s Wireless Controller menu allows remote operation of the unit and the connected load.  Z-Wave node in the system also acts as a repeater, so as to re-transmit the RF signal to ensure that the signal is received by its intended destination by routing the signal around obstacles and radio dead spots.\n\nThe In-Wall Dimmer Module is designed to control the on/off status of lighting and appliances load in your house.  The unit also provides dimmer function which is only applicable to light bulbs.  AC 230V voltage, this module can support up to 300W resistive/ incandescent load, or 200W fluorescent load.",
            name: "Description",
          },
          {
            text:
              "(This procedure should only be used when the primary controller is no longer operational.)\n1.  Press the link key three times within 1.5 seconds to put the unit into exclusion mode.\n2.  Within 1 second of step 1, press link key again and hold until LED is off (about 5 sec.).\n3.  Node ID is excluded, and the unit is returned to the factory default state.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          { text: "In-Wall Dimmer Module", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1057/Manual_AD146-0_20140728.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "1.  Put the Z-Wave Controller into exclusion mode.\n2.  Press the link key three times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          { text: "AD146-0", id: "0002", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1057/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "Basic Set Command value",
            max: "255",
            min: "0",
            type: "short",
            units: "",
            value: "255",
            Help:
              "\n\t0 is off. 1 to 99 sets output level at specified value. \n255 sets output level at last memorized level\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Delay Time",
            max: "25",
            min: "3",
            type: "byte",
            units: "seconds",
            value: "3",
            Help: "\n\tDelaying time to report to Group 1\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Last Status",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n\tRemember the last status: 0 (do not remember) | 1 (remember)\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Switching type",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help: "\n\t0: Single Pole Double Throw (1: Toggle switch)\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Output Mode",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help: "\n\tOutput mode setting: 0 (dimming) | 1 (on/off)\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
