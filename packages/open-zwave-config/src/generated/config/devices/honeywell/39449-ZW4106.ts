import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "39449 / ZW4106 Plug-in Smart Switch", name: "Name" },
          {
            text: "Plug-in Switch (Dual Plug Simultaneous Control)",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0039:3033:5052",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://www.security.honeywellhome.com/product-repository/z5swpid",
            name: "ProductPage",
          },
          { text: "images/honeywell/39449-ZW4106.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3740/39449-HQSG_v3.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1) Follow the instructions for your Z-Wave certified controller to add a device to the Z-Wave network.\n      2) Once the controller is ready to add your device, press and release the manual/program button on the smart switch. Repeat as necessary to add the switch to the network.",
            name: "InclusionDescription",
          },
          {
            text:
              "1) Follow the instructions for your Z-Wave certified controller to remove a device from the Z-Wave network.\n      2) Once the controller is ready to remove your device, press and release the manual/program button on the smart switch to remove it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1) If plugged in, unplug the device from the receptacle.\n      2) Press and hold the top button, plug the device in, and continue to hold for at least 3 seconds.",
            name: "ResetDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/products/3740?selectedFrequencyId=2",
            id: "3033",
            name: "ZWProductPage",
            type: "5052",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "5052",
          },
          {
            text: "39449 / ZW4106",
            id: "3033",
            name: "Identifier",
            type: "5052",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial metadata import from Z-Wave Alliance",
                author: "Alexander Bauer - sasha@linux.com",
                date: "24 May 2020",
                revision: 1,
              },
              {
                text: "Correct Path to Image File",
                author: "Justin Hammond",
                date: "24 June 2020",
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
            index: "3",
            label: "Invert/Disable LED",
            min: "0",
            max: "2",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        Invert/Disable LED (Adjusts when the indicator LED is turned ON, OFF, or disables it entirely)\n      ",
            Item: [
              { value: "0", label: "LED ON / Device ON" },
              { value: "1", label: "LED ON / Device OFF" },
              { value: "2", label: "Disable LED" },
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
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "Basic - Load", max_associations: "5" },
              {
                index: "3",
                label: "Basic - Double Tap",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
