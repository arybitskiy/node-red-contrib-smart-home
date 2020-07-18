import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011A:0901:0601",
            name: "OzwInfoPage",
          },
          { text: "images/enerwave/zwn-bpc.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2165/",
            id: "0901",
            name: "ZWProductPage",
            type: "0601",
          },
          {
            text:
              "3. Once program button is pressed and hold for 10 second, the device will send a device reset locally notification to controller. Then clear all the module. Use  this  procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. When the controller is in add mode, press and hold the program button of ZWN-BPC for 2 second, and then the controller will verify the add.",
            name: "InclusionDescription",
          },
          {
            text:
              "Once short press the program button  it will send  singlecast wake up notification to controller devices.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0901",
            name: "FrequencyName",
            type: "0601",
          },
          {
            text:
              "The PIR Motion Sensor ZWN-BPC is a Z-Wave enabled device and is fully compatible with other Z-Wave certified device from other manufacturers.  With the ZWN-BDS to monitor the  environment and provide hand-free lighting control, it can also trigger a Z-Wave enabled alarm when motion is detected and when there is movement within or across the detection of coverage, one triggering signal will be transmitted to all associated Z-Wave devices.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2165/20170111 ZWN-BPC.pdf",
            name: "ProductManual",
          },
          {
            text:
              "2. When the controller is in remove mode, press and hold the program button of ZWN-BPC for 2 second, and then the controller will remove it from the current Z-Wave network.",
            name: "ExclusionDescription",
          },
          { text: "ZWN-BPC", id: "0901", name: "Identifier", type: "0601" },
          { text: "Ceiling Mounted PIR Motion Sensor", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2165/xml",
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
            index: "0",
            instance: "1",
            label: "Off time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Sets the time after triggering the sensor to send the Basic OFF command. 0: Don't send Basic OFF. 1-240: N minutes. 241-255: 15 seconds.",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Reports", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
