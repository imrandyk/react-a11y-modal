import React from 'react';
import { Modal } from 'react-a11y-modal';

const ModalWithHeaderAndFooter = ({ onAfterClose = () => {} }) => (
  <Modal.Container onAfterClose={onAfterClose}>
    {({ actions }) => (
      <>
        <Modal.Header>
          <h3 className="ModalHeader__title">Modal With Header And Footer</h3>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a
          diam maecenas sed enim ut. Convallis a cras semper auctor. At lectus
          urna duis convallis convallis tellus id. Lectus vestibulum mattis
          ullamcorper velit. Egestas quis ipsum suspendisse ultrices gravida
          dictum fusce ut placerat. Mauris sit amet massa vitae tortor
          condimentum lacinia quis. Odio facilisis mauris sit amet massa vitae
          tortor condimentum lacinia. Morbi tincidunt ornare massa eget egestas.
          Semper risus in hendrerit gravida rutrum quisque non tellus. Imperdiet
          dui accumsan sit amet nulla. Odio euismod lacinia at quis risus.
          Dignissim sodales ut eu sem integer vitae. Purus semper eget duis at
          tellus. Tristique et egestas quis ipsum suspendisse. Quis vel eros
          donec ac odio tempor orci dapibus. Morbi tristique senectus et netus
          et malesuada fames ac turpis. Ultricies tristique nulla aliquet enim
          tortor. Leo in vitae turpis massa sed. Viverra ipsum nunc aliquet
          bibendum enim facilisis gravida neque. Diam sit amet nisl suscipit
          adipiscing bibendum est ultricies. Non pulvinar neque laoreet
          suspendisse interdum. Tempor nec feugiat nisl pretium fusce id.
          Ultricies leo integer malesuada nunc vel. Eget gravida cum sociis
          natoque penatibus et magnis dis parturient. Faucibus et molestie ac
          feugiat sed lectus vestibulum. Sed ullamcorper morbi tincidunt ornare
          massa eget egestas purus. Nulla posuere sollicitudin aliquam ultrices.
          Auctor neque vitae tempus quam. Magna fringilla urna porttitor rhoncus
          dolor purus non enim. Tristique senectus et netus et malesuada.
          Gravida neque convallis a cras. Sociis natoque penatibus et magnis dis
          parturient montes nascetur. Auctor eu augue ut lectus arcu. Vitae
          tempus quam pellentesque nec nam aliquam sem et tortor. Placerat
          vestibulum lectus mauris ultrices eros in. Vestibulum sed arcu non
          odio. Etiam non quam lacus suspendisse faucibus interdum posuere lorem
          ipsum. Bibendum arcu vitae elementum curabitur. Diam volutpat commodo
          sed egestas egestas fringilla phasellus faucibus. Gravida dictum fusce
          ut placerat orci nulla. Faucibus turpis in eu mi bibendum neque
          egestas. Sapien eget mi proin sed libero. Amet volutpat consequat
          mauris nunc congue nisi vitae suscipit tellus. Ut ornare lectus sit
          amet est placerat. Aliquam faucibus purus in massa. Platea dictumst
          vestibulum rhoncus est. Tellus id interdum velit laoreet id donec
          ultrices tincidunt. Cursus in hac habitasse platea dictumst quisque
          sagittis. Et netus et malesuada fames. In hac habitasse platea
          dictumst vestibulum rhoncus. Tempus iaculis urna id volutpat lacus
          laoreet non curabitur. Iaculis urna id volutpat lacus laoreet. Aenean
          sed adipiscing diam donec adipiscing tristique risus nec. Lobortis
          feugiat vivamus at augue eget arcu. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique. Tempor
          commodo ullamcorper a lacus. Sociis natoque penatibus et magnis dis
          parturient montes nascetur. Duis ut diam quam nulla porttitor. Tortor
          pretium viverra suspendisse potenti nullam. Sed id semper risus in
          hendrerit gravida. Porta non pulvinar neque laoreet suspendisse
          interdum consectetur libero. Nisl condimentum id venenatis a
          condimentum. Nunc sed id semper risus in hendrerit gravida rutrum
          quisque. Metus dictum at tempor commodo ullamcorper a lacus vestibulum
          sed. Aenean euismod elementum nisi quis eleifend. Tristique senectus
          et netus et malesuada. Et malesuada fames ac turpis egestas integer.
          Tempor orci eu lobortis elementum nibh tellus molestie nunc. Lacus
          laoreet non curabitur gravida arcu ac tortor. Eu augue ut lectus arcu
          bibendum at varius vel. Ac placerat vestibulum lectus mauris ultrices
          eros in. Orci porta non pulvinar neque laoreet suspendisse interdum
          consectetur. Turpis egestas integer eget aliquet nibh praesent
          tristique magna sit. Integer quis auctor elit sed vulputate mi sit
          amet mauris. Magna etiam tempor orci eu.
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={actions.close}
            className="ModalFooter__button ModalFooter__button--cancel"
          >
            Cancel
          </button>
          <button
            onClick={actions.close}
            className="ModalFooter__button ModalFooter__button--cta"
          >
            Accept
          </button>
        </Modal.Footer>
      </>
    )}
  </Modal.Container>
);

export default ModalWithHeaderAndFooter;
