import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "ZWN-RSM2-PLUS Smart Dual Relay Switch Module",
            name: "Name",
          },
          {
            text:
              "ZWN-RSM2-Plus Transform any home into a connected home with the Enerwave Z-Wave Plus Smart Dual Relay Wireless Lighting Control Module. The lighting control enables wireless control of on/off functions for standard table and floor lamps, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/011A:0606:0111",
            name: "OzwInfoPage",
          },
          {
            text: "https://enerwaveautomation.com/products/zwnrsm2/",
            name: "ProductPage",
          },
          {
            text: "https://enerwaveautomation.com/products/zwnrsm2/",
            name: "ProductSupport",
          },
          { text: "images/enerwave/zwnrsm2plus.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=%26filename=MarketCertificationFiles/2242/ZWN-RSM2%202017-2-28.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Once program button is pressed and hold for 10 second, the device will send a device reset locally notification to controller. Then clear all of information for the network, and restore factory defaults, and reset the module. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "When the controller is in remove mode,Press and release the program button of ZWN-RSM2 module, or Flick 3 times of the connected switch with Aux1 line (or Aux2 line) in 1.5 second. Then the controller will remove the module from current Z-Wave network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "When the controller is in add mode,Press and release the program button of ZWN-RSM2 module,or Flick 3 times of the connected switch with Aux1 line(or Aux 2 line) in 1.5 second. Then the controller will add the module into current Z-Wave network.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0606",
            name: "FrequencyName",
            type: "0111",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Original file was placeholder - had not revision entry",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Wholesale replacement of placeholder file. Added information from mfg site",
                author: "Steve28",
                date: "03 Jul 2020",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "112",
        Value: [
          {
            type: "short",
            genre: "config",
            index: "3",
            label: "Unsolicited Report Configuration",
            units: "",
            min: "0",
            max: "255",
            value: "0",
            Help:
              "ZWN-RSM2-PLUS can send unsolicited status reports to the primary controller (Node ID 0x1) when the switch is toggled if the controller is designed as a gateway.  If your controller is not a gateway or does not need the status reported or you think it could confuse your Z-Wave network, you can use Command_Class_Configuration to disable this function.  By default this function is disabled. ZWM-RSM2 disabled=0, enabled=255.  ZWN-RSM2-PLUS disabled=0, enabled=1",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              {
                index: "2",
                max_associations: "3",
                label: "StatusReport_EP1: Switch Binary Report",
              },
              {
                index: "3",
                max_associations: "3",
                label: "StatusReport_EP2: Switch Binary Report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
