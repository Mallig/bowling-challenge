describe('Card', function() {

  function roundDouble() {}

  beforeEach(function(){
    card = new Card();
    frame1 = new Frame();
    frame2 = new Frame();
  });

  it('stores a frames score', function() {
    frame1.bowl(6)
    frame1.bowl(0)
    card.store(frame1)
    expect(card.frames).toContain(frame1.bowls)
  });

  describe('when a spare or strike frame is stored', function() {
    it('knows to add the next two rolls for a strike', function() {
      frame1.bowl(10)
      card.store(frame1)
      expect(card.bonuses).toContain(2)
    });

    it('knows to add the next one roll for a spare', function() {
      frame1.bowl(5)
      frame1.bowl(5)
      card.store(frame1)
      expect(card.bonuses).toContain(1)
    });
  });

  describe('when the previous frame was a spare', function() {
    it('adds the next roll to its score', function() {
      frame1.bowl(5)
      frame1.bowl(5)
      card.store(frame1)
      frame2.bowl(8)
      frame2.bowl(0)
      card.store(frame2)
      expect(card.frames[0]).toContain(8)
    });
  });
  
});
