import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:000F:0005",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/firefighter.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1827/",
            id: "000F",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text:
              'The Ecolink Z-Wave Plus FireFighter is an audio detector that listens for your smoke, fire, or Carbon Monoxide alarm and transmits as alert back to your hub to notify you of an event.  It is easy to include/exclude with your hub, detector both temporal 3 and 4 patterns of your sensing device, has a 5 year battery life on (1) CR123A Lithium battery included.  Dimensions are 3 1/8" x 1" tall.  Certified to work with most Z-Wave enabled hubs on the market.',
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1827/1 - Ecolink FireFighter Z-wave plus Manual (standard).pdf",
            name: "ProductManual",
          },
          {
            text: "FF-ZWAVE5-ECO",
            id: "000F",
            name: "Identifier",
            type: "0005",
          },
          { text: "Ecolink Z-Wave Plus FireFighter", name: "Name" },
          {
            text:
              "Removing Sensor\nA)\tAny sensor can be removed from any Z-Wave Plus network with any Z-Wave Plus controller.  Follow the directions to put your Z-Wave Plus Controller into Z-Wave Plus exclusion mode.\nB)\tPress the learn button located near the LED and Tamper switch.  If successfully removed from the Z-Wave Plus network, the sensor’s LED should blink continuously if successful.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Factory Default\n The FireFighter™ can be restored back to factory default settings which will remove its Z-Wave Plus node ID from the sensor (but not the controller) with the following steps. \nA)\tPut the battery into the sensor.\nB)\tDo not press the tamper switch.\nC)\tHold the learn button down for 10 seconds until the LED turns RED.\nD)\tRelease the learn button and wait for the sensor’s green LED to “breath” on and off continuously. The sensor is now ready to be added to a Z-Wave Plus network, and all settings have been restored.\n\nPlease use this procedure only when the network primary\ncontroller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000F",
            name: "FrequencyName",
            type: "0005",
          },
          {
            text:
              "Adding Sensor\nA)\tBe sure that the Z-Wave Plus Controller you are using is compatible with the FireFighter™. \nB)\tEither mount or move the sensor as close as possible to the place in the building where the sensor is to be mounted in order that the new Z-Wave Plus node is added to the correct place in the mesh network routing tables. \nC)\tTo add the sensor to an existing Z-Wave Plus network, follow the directions to put your Z-Wave Plus Controller into add (inclusion) mode. The FireFighter™ enters add and remove (inclusion/exclusion) mode on pressing the learn button for 1 second which is located on the PCB between the LED and the tamper switch. If the LED starts blinking continuously, the sensor has no node ID and was not successfully added, so start step C over again. \nD)\tIf after 5 seconds the LED is not blinking, look on the Z-Wave Plus controller’s interface for feedback on whether the sensor was added successfully. If you do not see any feedback that the sensor was added, follow directions for removing the sensor from a Z-Wave Plus network, and then try adding the sensor again. If you are still having problems, you may need to add additional Z-Wave Plus listening devices in-between the controller and the sensor.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1827/xml",
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
