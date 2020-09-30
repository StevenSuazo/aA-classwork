require_relative 'questions_database'
require_relative 'user'
require_relative 'question'
require_relative 'reply'
require_relative 'question_like'

class QuestionFollow 
  attr_accessor :id, :question_id, :user_id

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def self.find_by_id(id)
    question_follow = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * FROM question_follows WHERE id = ?
      SQL
      return nil unless question_follow.length > 0
      QuestionFollow.new(question_follow.first)
  end

  def self.followers_for_question_id(question_id)
    users = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT 
      * 
    FROM 
      question_follows
    JOIN users ON 
      question_follows.user_id = users.id
    WHERE 
      question_id = ?
    SQL
    return nil unless users.length > 0
    users.map { |user| User.new(user)}
  end

  def self.followed_questions_for_user_id(user_id)
    questions = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT 
      * 
    FROM 
      question_follows
    JOIN questions ON 
      question_follows.question_id = questions.id
    WHERE 
      user_id = ?
    SQL
    return nil unless questions.length > 0
    questions.map { |question| Question.new(question)}
  end

end