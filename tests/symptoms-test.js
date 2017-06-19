import React from 'react';
import { expect } from 'chai';
import {
  $,
  it,
  startApp
} from './utils/test-helpers';

const SymptomCard = '[data-test-symptom-card]';
const SymptomTitle = '[data-test-symptom-title]';
const SymptomDescription = '[data-test-symptom-description]';
const SymptomQuestion = '[data-test-symptom-question]';

describe('Symptoms:', function() {
  startApp();

  beforeEach(function() {
    this.app.login();
  });

  afterEach(function() {
    this.app.logout();
  });

  describe('visiting symptoms index', function() {
    beforeEach(function() {
      this.app.visit('/symptoms');
    });

    it('renders the index', function() {
      expect(this.app.currentPath).to.equal('/symptoms');
    });

    it('renders one symptom', function() {
      expect($(SymptomCard).length).to.equal(1);
    });

    it('renders the symptoms name', function() {
      expect($(SymptomTitle).text()).to.equal('Mouth ulcers');
    });

    it('renders the symptoms description', function() {
      expect($(SymptomDescription).text()).to.equal('Painful mouth ulcers make it difficult to eat');
    });

    it('renders the symptoms questions', function() {
      expect($(SymptomQuestion).length).to.equal(2);
    });
  });
});
