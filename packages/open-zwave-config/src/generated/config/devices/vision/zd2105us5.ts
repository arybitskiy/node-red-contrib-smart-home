import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:2201:2022",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zd2105us5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1727/",
            id: "2201",
            name: "ZWProductPage",
            type: "2022",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1727/ZD 2105-5_V1-20160329.pdf",
            name: "ProductManual",
          },
          { text: "ZD2105US-5", id: "2201", name: "Identifier", type: "2022" },
          {
            text:
              "*If the cover of sensor is removed, the tamper switch will send signal according the Status/Signal table, and the LED will go solid and ZD2105 will send “Wake Up Notification” after 10 seconds.  If ZD2105 received “Wake Up No More Information” command, the red LED will go off.  If ZD2105 did not receive”Wake Up No More Information” command after 10 seconds the red LED will go off.\n\n*Use “Wake Up” command to set up the awaking time and send the wake up notification to controller.  User can use command to change the auto wake up from 10 minutes to 1 week, Interval increment is 3 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "The ZD2105US-5 Recessed Door sensor can be used in any Z-Wave network, to detect the opening or closing of a door or window.  Special Design can fit most door/window frames.   This sensor monitors door/window and send Z-Wave™ signal when door or window is opened and closed.  Recessed Door Sensors are easily installed inside the door or window frame to keep the sensor hidden from view.  When the device is securely included into Z-Wave network, above communication will be encrypted.",
            name: "Description",
          },
          {
            text:
              "For “Exclusion” from (removing from) a network: Put the Z-Wave™ Interface Controller into “exclusion” mode, and following its instruction to delete the ZD2105 from your controller.  Press the Program Switch of ZD2105 for 1 second at least to be excluded.  Note: All user and network settings will be cleared and the device reset to factory setting defaults when the device is excluded.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2201",
            name: "FrequencyName",
            type: "2022",
          },
          {
            text:
              "For “Inclusion” in (adding to) a network: Put the Z-Wave™ Interface Controller into “inclusion” mode, and following its instruction to add the ZD2105 to your controller. To get in the “inclusion” mode, please press the Program Switch of ZD2105 for sending the NIF. After sending NIF, Z-Wave will send the auto inclusion; otherwise, ZD2105 will go to sleep after 20 seconds.",
            name: "InclusionDescription",
          },
          { text: "Door Sensor", name: "Name" },
          {
            text:
              "*open the cover to send the Alarm Report and trigger the reed switch (close & open) 10 times in 10 seconds, ZD2105 will send the “Device Reset Locally Notification” command and reset to the factory default.\n * Please use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1727/xml",
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
      { action: "remove", id: "48" },
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
