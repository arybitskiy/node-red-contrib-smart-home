import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0131:0106:2001",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/vszd2102.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1864/",
            id: "0106",
            name: "ZWProductPage",
            type: "2001",
          },
          {
            text:
              "The ZD2102-5 is forced awake by opening the rear cover, the red LED will stay on and the 2102-5 will stay awake for 10 seconds.  The  ZD2102-5 will send “Wake Up Notification”.  If ZD2102-5 receives a “Wake Up No More Information” command then the red LED will go off and it will go to sleep.\nAuto Wake Up:  The wakeup interval is user settable from 10 minutes to 1 week using COMMAND_CLASS_WAKE_UP, Interval increment is 3 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1864/vs-zd2102 - Zipato Door+Window Sensor User Manual v1.5.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The ZD2102-5 Door and Window sensor is used in any Z-Wave network to detect the opening or closing of a door or window.  Special Design can fit most of door/window frame.  The primary sensing element is a magnetic reed switch, the ZD2102-5 is supplied with the sensor, sensor mounting bracket and the trigger magnet.  An additional set of sensor inputs are provided through a 2 position screw terminal and can be used to expand the sensor capability to multiple inputs.  The ZD2102-5 is powered by a single CR123A Lithium Battery (supplied with unit, battery life is more than 5 years) and is intended for indoor use only.   The ZD2102-5 features tamper proof switch, low battery warning and can be firmware updated over the air.",
            name: "Description",
          },
          {
            text:
              "For “Inclusion” (adding to) a network: Put the Z-Wave™ network controller into “inclusion” mode following its instructions.  To add the ZD2102-5 to your controller press the program switch of ZD2102-5 to send the Node Information Frame (NIF). After sending NIF, the network controller will send the auto inclusion request; otherwise, ZD2102-5 will go to sleep after 15 seconds.",
            name: "InclusionDescription",
          },
          { text: "Door Sensor", name: "Name" },
          {
            text:
              "For “Exclusion” (removing from) a network: Put the Z-Wave™ network controller into “exclusion” mode, following its instructions. To delete the ZD2102-5 from your controller press the program switch of ZD2102-5 for at least 1 second to be excluded.  Note: All user and network settings will be cleared and the device reset to factory setting defaults when the device is excluded.",
            name: "ExclusionDescription",
          },
          { text: "ZD2102US-5", id: "0106", name: "Identifier", type: "2001" },
          {
            text:
              "Factory Default Reset: Trigger the rear cover switch to send the Alarm Report and trigger the reed switch (close & open) 5 times in 10 seconds, ZD2102-5 will send the “Device Reset Locally Notification” command and reset to the factory default condition. (Remark: This is to be used only in the case of primary controller being inoperable or otherwise unavailable.)",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0106",
            name: "FrequencyName",
            type: "2001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1864/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
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
