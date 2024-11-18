import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react'
import { BiMinus, BiPlus } from 'react-icons/bi'

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 10,
  width: '100%',
  height: '4rem',
};
const AccordionEx = () => {
  return (
    <div className='container'>
      <Accordion allowToggle>
      <div className='my-5'>
        <h1>Frequently Asked Questions (FAQs)</h1>
      </div>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What are Personalized Recommendations?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Use machine learning algorithms to suggest events based on user preferences, past bookings, and location.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What is Social Media Integration?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Allowing users to share their bookings or see which events their friends are interested in.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What is meant by Interactive Seat Maps?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Provide a visual representation of the venue with selectable seats, real-time updates on seat availability, and 3D views where possible.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What is Integration with Loyalty Programs?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Reward frequent users with points, discounts, or early access to tickets through integration with loyalty programs.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What are Express Checkouts?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Enable one-click booking or stored payment methods for quick and seamless transactions.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            What is Augmented Reality (AR) Integration?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Provide AR experiences for venue previews, seat views, or interactive event promotions.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton sx={{ ...commonStyles, borderRadius: 10 }}>
            <Box fontSize='22px' as='span' flex='1' textAlign='left' style={{ marginLeft: "20px" }}>
            Is my Subscription cancellable?
            </Box>
            {isExpanded ? (
              <BiMinus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}} fontSize='24px' />
            ) : (
              <BiPlus style={{ backgroundColor: "#7532A9" , marginRight:'20px' , color: "white"}}  fontSize='24px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' style={{ marginLeft: "20px" }}>
        Yes, it is.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default AccordionEx
